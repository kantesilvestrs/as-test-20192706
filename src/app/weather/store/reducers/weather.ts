import { CityWeatherForecast } from "../../../model/weather";
import { WeatherActions, WeatherActionTypes } from "../actions/weather";

export interface AppState {
  weather: State;
}

export interface State {
  cities: CityWeatherForecast[];
  loading: boolean;
  error: string | null;
}

export const initialState: State = {
  cities: [],
  loading: false,
  error: null
};

export function reducer(
  state: State = initialState,
  action: WeatherActions
): State {
  switch (action.type) {
    case WeatherActionTypes.Search: {
      return {
        ...state,
        error: null,
        loading: true
      };
    }
    case WeatherActionTypes.SearchSuccess: {
      let cityIndex = state.cities.findIndex(
        city => city.id === action.payload.id
      );

      if (cityIndex !== -1) {
        state.cities[cityIndex] = {
          ...state.cities[cityIndex],
          forecast: action.payload.forecast
        };
      } else {
        state.cities.push(action.payload);
      }

      return {
        ...state,
        loading: false
      };
    }
    case WeatherActionTypes.SearchError: {
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    }
    default: {
      return state;
    }
  }
}
