import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Search } from "./store";
import * as fromWeather from "./store/reducers/weather";
import { getWeatherState, getAllCities } from "./store/selectors";

@Component({
  selector: "app-weather",
  template: `
    <app-search
      (onSearch)="onSearch($event)"
      [loading]="(weather$ | async)?.loading"
      [error]="(weather$ | async)?.error"
    ></app-search>
    <app-results [cities]="cities$ | async"></app-results>
  `
})
export class WeatherContainer {
  weather$: any;
  cities$: any;

  constructor(private store: Store<fromWeather.State>) {
    this.weather$ = this.store.select(getWeatherState);
    this.cities$ = this.store.select(getAllCities);
  }

  onSearch(city: string) {
    this.store.dispatch(new Search(city));
  }
}
