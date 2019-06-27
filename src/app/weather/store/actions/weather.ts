import { Action } from "@ngrx/store";
import { CityWeatherForecast } from "../../../model/weather";

export enum WeatherActionTypes {
  Search = "[Weather] Search Weather For City",
  SearchSuccess = "[Weather] Search Weather For City Success",
  SearchError = "[Weather] Search Weather For City Error"
}

export class Search implements Action {
  public readonly type = WeatherActionTypes.Search;
  constructor(public payload: string) {}
}

export class SearchSuccess implements Action {
  public readonly type = WeatherActionTypes.SearchSuccess;
  constructor(public payload: CityWeatherForecast) {}
}

export class SearchError implements Action {
  public readonly type = WeatherActionTypes.SearchError;
  constructor(public payload: any) {}
}

export type WeatherActions = Search | SearchSuccess | SearchError;
