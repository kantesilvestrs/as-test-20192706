import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { WeatherContainer } from "./weather.container";
import { StoreModule, Store } from "@ngrx/store";
import * as fromWeather from "./store/reducers/weather";
import { Search } from "./store";
import { cold } from "jasmine-marbles";

describe("WeatherContainer", () => {
  let component: WeatherContainer;
  let fixture: ComponentFixture<WeatherContainer>;
  let store: jasmine.SpyObj<Store<fromWeather.State>>;

  const initialState = {
    weather: {
      cities: [
        {
          id: 2643743,
          city: "London",
          forecast: [
            { time: 0, temperature: 14.41 },
            { time: 6, temperature: 14.75 },
            { time: 12, temperature: 23.56 },
            { time: 18, temperature: 20.96 }
          ]
        }
      ],
      loading: false,
      error: null
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherContainer],
      imports: [
        StoreModule.forRoot(
          { weather: fromWeather.reducer },
          {
            initialState: initialState
          }
        )
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    store = TestBed.get(Store);

    spyOn(store, "dispatch").and.callThrough();
    spyOn(store, "select").and.callThrough();

    fixture = TestBed.createComponent(WeatherContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  describe("#observables", () => {
    describe("weather$", () => {
      it("should return observable from state", () => {
        const weather = cold("a", {
          a: initialState.weather
        });

        store.select.and.returnValue(weather);
        expect(component.weather$).toBeObservable(weather);
      });
    });

    describe("cities$", () => {
      it("should return observable from state", () => {
        const cities = cold("a", {
          a: initialState.weather.cities
        });

        store.select.and.returnValue(cities);
        expect(component.cities$).toBeObservable(cities);
      });
    });
  });

  describe("#methods", () => {
    it("should dispatch an action to search the city weather", () => {
      const action = new Search("London");
      component.onSearch("London");
      expect(store.dispatch).toHaveBeenCalledWith(action);
    });
  });
});
