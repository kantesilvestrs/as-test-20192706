import { Weather } from "../../../model";

export const weatherMockResponse: Weather = {
  cod: "200",
  message: 0.0104,
  cnt: 8,
  list: [
    {
      dt: 1561626000,
      main: {
        temp: 19.94,
        temp_min: 18.36,
        temp_max: 19.94,
        pressure: 1029.52,
        sea_level: 1029.52,
        grnd_level: 1024.28,
        humidity: 55,
        temp_kf: 1.58
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" }
      ],
      clouds: { all: 0 },
      wind: { speed: 5.7, deg: 60.469 },
      sys: { pod: "d" },
      dt_txt: "2019-06-27 09:00:00"
    },
    {
      dt: 1561636800,
      main: {
        temp: 23.56,
        temp_min: 22.37,
        temp_max: 23.56,
        pressure: 1028.99,
        sea_level: 1028.99,
        grnd_level: 1023.46,
        humidity: 44,
        temp_kf: 1.19
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" }
      ],
      clouds: { all: 0 },
      wind: { speed: 6.18, deg: 67.508 },
      sys: { pod: "d" },
      dt_txt: "2019-06-27 12:00:00"
    },
    {
      dt: 1561647600,
      main: {
        temp: 24.14,
        temp_min: 23.35,
        temp_max: 24.14,
        pressure: 1028.04,
        sea_level: 1028.04,
        grnd_level: 1022.73,
        humidity: 46,
        temp_kf: 0.79
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" }
      ],
      clouds: { all: 0 },
      wind: { speed: 6.13, deg: 76.442 },
      sys: { pod: "d" },
      dt_txt: "2019-06-27 15:00:00"
    },
    {
      dt: 1561658400,
      main: {
        temp: 20.96,
        temp_min: 20.56,
        temp_max: 20.96,
        pressure: 1026.96,
        sea_level: 1026.96,
        grnd_level: 1021.61,
        humidity: 53,
        temp_kf: 0.4
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" }
      ],
      clouds: { all: 0 },
      wind: { speed: 6.29, deg: 71.386 },
      sys: { pod: "d" },
      dt_txt: "2019-06-27 18:00:00"
    },
    {
      dt: 1561669200,
      main: {
        temp: 16.62,
        temp_min: 16.62,
        temp_max: 16.62,
        pressure: 1027.65,
        sea_level: 1027.65,
        grnd_level: 1022.38,
        humidity: 64,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      clouds: { all: 0 },
      wind: { speed: 5.87, deg: 67.881 },
      sys: { pod: "n" },
      dt_txt: "2019-06-27 21:00:00"
    },
    {
      dt: 1561680000,
      main: {
        temp: 14.41,
        temp_min: 14.41,
        temp_max: 14.41,
        pressure: 1027.83,
        sea_level: 1027.83,
        grnd_level: 1022.61,
        humidity: 73,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      clouds: { all: 0 },
      wind: { speed: 5.24, deg: 65.729 },
      sys: { pod: "n" },
      dt_txt: "2019-06-28 00:00:00"
    },
    {
      dt: 1561690800,
      main: {
        temp: 13.56,
        temp_min: 13.56,
        temp_max: 13.56,
        pressure: 1026.42,
        sea_level: 1026.42,
        grnd_level: 1021.29,
        humidity: 78,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      clouds: { all: 0 },
      wind: { speed: 4.53, deg: 68.561 },
      sys: { pod: "n" },
      dt_txt: "2019-06-28 03:00:00"
    },
    {
      dt: 1561701600,
      main: {
        temp: 14.75,
        temp_min: 14.75,
        temp_max: 14.75,
        pressure: 1025.48,
        sea_level: 1025.48,
        grnd_level: 1020.33,
        humidity: 77,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" }
      ],
      clouds: { all: 0 },
      wind: { speed: 5.09, deg: 73.818 },
      sys: { pod: "d" },
      dt_txt: "2019-06-28 06:00:00"
    }
  ],
  city: {
    id: 2643743,
    name: "London",
    coord: { lat: 51.5073, lon: -0.1277 },
    country: "GB",
    population: 1000000
  }
};
