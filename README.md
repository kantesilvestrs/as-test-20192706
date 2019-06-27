# AgileSphere test

## Assumptions

- Project needs to stay Angular 5.2.5 version
- TypeScript needs to stay at 2.5.3
- Project structure and file naming is controlled by internal style guides, so I will try no to adjust folder structures and naming convetions
- Weather module is going to perform only the requirements outlined below in the task, e.g.:
  - Get weather result only for the city, and
  - currently will not going to be used for other types of search
- Weather module is a whole component and needs only one state definition
- Live updates on added cities is not required, manual search of the same city is enough

## Notes

- Had issues setting up project because it initialized with 2.8.16 which supports TS 2.8, I needed to adjust and include package-lock file to lower TS version requirement to 2.1
- Following test specs were to created/finished due to time constraints
  - **Services:** Service spec, Reducer spec
  - **Components:** Results spec, App spec
  - **E2E:** Mock e2e data test case, Mock e2e data test case

## Task

Using the Free open weather map api (http://openweathermap.org/forecast5 api key has been included inside weather.service.ts)

- Build an application that allows you to search the weather forecast for a city.
- Every time a new city is searched - Add to a table of cities displaying the next 24 hours weather forecast.
- Build the application using ng-rx

We have provided a skeleton application generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Expectations

- Complete the components(search, results and the weather container)
- Complete the Weather.service.ts, using the API provided by the openweathermap for a given city
- Complete the unit test files (\*.spec.ts).
- Complete the End to End test using Protractor.
- Intrfaces have been provided in model/weather.ts. Please use these interfaces.
- An example layout table is provided inside the results component.Please use this as template.
- We expect the application to compile and all the tests to pass.
- Please upload your code to GITHUB and once you are done send us the link.

## Development server

Run `npm start` for a dev server. App will open here `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running e2e tests

Run `ng e2e` to execute the e2e tests via [Protractor](https://www.protractortest.org).
