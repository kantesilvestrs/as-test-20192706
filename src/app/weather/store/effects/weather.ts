import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { WeatherService } from "../../weather.service";
import { Action } from "@ngrx/store";
import {
  Search,
  WeatherActionTypes,
  SearchSuccess,
  SearchError
} from "../actions/weather";
import { map, switchMap, catchError } from "rxjs/operators";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import {
  CityWeatherForecast,
  Weather,
  WeatherList
} from "../../../model/weather";

@Injectable()
export class WeatherEffects {
  @Effect()
  searchWeather$: Observable<Action> = this.actions$.pipe(
    ofType<Search>(WeatherActionTypes.Search),
    map(action => action.payload),
    switchMap(city => {
      return this.weatherService.searchWeatherForCity(city).pipe(
        map(weather => this.transform(weather)),
        map(cityWeatherForecast => new SearchSuccess(cityWeatherForecast)),
        catchError(err => of(new SearchError(err)))
      );
    })
  );

  constructor(
    private actions$: Actions,
    private weatherService: WeatherService
  ) {}

  private transform = (data: Weather): CityWeatherForecast => {
    return {
      id: data.city.id,
      city: data.city.name,
      forecast: data.list
        .filter((weather: WeatherList) => this.getTime(weather.dt) % 6 === 0)
        .map((weather: WeatherList) => ({
          time: this.getTime(weather.dt),
          temperature: weather.main.temp
        }))
        .sort((a, b) => a.time - b.time)
    };
  };

  private getTime = (timestamp: number) =>
    +(new Date(timestamp * 1000).getHours() - 1);
}
