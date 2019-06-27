import { Component, Input } from "@angular/core";
import { CityWeatherForecast } from "../../../model/weather";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html"
})
export class ResultsComponent {
  @Input() cities: any;

  constructor() {}

  trackByFn(index, item: CityWeatherForecast) {
    return item.id;
  }
}
