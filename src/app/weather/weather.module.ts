import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WeatherContainer } from "./weather.container";
import { WeatherService } from "./weather.service";
import { SearchComponent } from "./components/search/search.component";
import { ResultsComponent } from "./components/results/results.component";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { reducer, WeatherEffects } from "./store";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature("weather", reducer),
    EffectsModule.forFeature([WeatherEffects]),
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [SearchComponent, ResultsComponent, WeatherContainer],
  providers: [WeatherService]
})
export class WeatherModule {}
