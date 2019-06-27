import { TestBed } from "@angular/core/testing";
import { Actions } from "@ngrx/effects";
import { cold, hot } from "jasmine-marbles";
import { WeatherEffects } from "./weather";
import { WeatherService } from "../../weather.service";
import { Observable } from "rxjs/Observable";
import { Search, SearchSuccess, SearchError } from "../actions/weather";
import { CityWeatherForecast } from "../../../model";
import { weatherMockResponse } from "./weather.mock";
import { HttpClientModule } from "@angular/common/http";
import { provideMockActions } from "@ngrx/effects/testing";
import { of } from "rxjs/observable/of";
import { _throw } from "rxjs/observable/throw";

describe("Weather Effects", () => {
  let effects: WeatherEffects;
  let weatherService: any;
  let actions$: Observable<Actions>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        WeatherEffects,
        WeatherService,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(WeatherEffects);
    weatherService = TestBed.get(WeatherService);
    actions$ = TestBed.get(Actions);
  });

  describe("searchWeather$", () => {
    it("should return a new Weather.SearchSuccess, with the city weather, on success", () => {
      const weather1 = {
        id: 2643743,
        city: "London",
        forecast: [
          { time: 0, temperature: 14.41 },
          { time: 6, temperature: 14.75 },
          { time: 12, temperature: 23.56 },
          { time: 18, temperature: 20.96 }
        ]
      } as CityWeatherForecast;
      const action = new Search("London");
      const completion = new SearchSuccess(weather1);

      actions$ = hot("a", { a: action });
      const expected = cold("b", { b: completion });

      spyOn(weatherService, "searchWeatherForCity").and.returnValue(
        of(weatherMockResponse)
      );

      expect(effects.searchWeather$).toBeObservable(expected);
    });

    it("should return a new Weather.SearchError if the weather service throws", () => {
      const error = "Unexpected Error. Try again later.";
      const action = new Search("asdas");
      const completion = new SearchError(error);

      actions$ = hot("a", { a: action });
      const expected = cold("b", { b: completion });

      spyOn(weatherService, "searchWeatherForCity").and.returnValue(
        _throw(error)
      );

      expect(effects.searchWeather$).toBeObservable(expected);
    });

    it(`should not do anything if the query is an empty string`, () => {
      const action = new Search("");

      actions$ = hot("a", { a: action });
      const expected = cold("-");

      expect(effects.searchWeather$).toBeObservable(expected);
    });
  });
});
