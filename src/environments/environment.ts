// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  currentWeatherUrl:'https://api.openweathermap.org/data/2.5/weather',
  weatherForcastUrl:'https://api.openweathermap.org/data/2.5/forecast',
  airPollutionUrl:'http://api.openweathermap.org/data/2.5/air_pollution',
  id:'524901',
  appid:'be066ec860e6782c1d3be611e6e7a533'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
