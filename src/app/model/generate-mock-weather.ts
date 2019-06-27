import { CityWeatherForecast } from "./weather";

export const generateMockWeather = (): CityWeatherForecast => ({
  id: 111,
  city: "London",
  forecast: [
    { time: 0, temperature: 14.53 },
    { time: 6, temperature: 13.51 },
    { time: 12, temperature: 22.31 },
    { time: 18, temperature: 20.54 }
  ]
});
