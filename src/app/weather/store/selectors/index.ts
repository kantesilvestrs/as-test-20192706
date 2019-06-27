import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromWeather from "../reducers/weather";

export const getWeatherState = createFeatureSelector<fromWeather.State>(
  "weather"
);

export const getAllCities = createSelector(
  getWeatherState,
  state => state.cities
);
