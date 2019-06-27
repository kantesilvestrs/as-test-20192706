import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { CUSTOM_ELEMENTS_SCHEMA, Component, ViewChild } from "@angular/core";
import { By } from "@angular/platform-browser";
import { SearchComponent } from "./search.component";
import { ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "host-component",
  template: `
    <app-search
      (onSearch)="onSearchCallback($event)"
      [loading]="childLoading"
      [error]="childError"
    ></app-search>
  `
})
class SearchComponentHost {
  @ViewChild(SearchComponent) searchComponent: SearchComponent;

  childLoading: boolean = false;
  childError: any = null;

  onSearchCallback(city: string) {
    return city;
  }

  changeChildLoading(value: boolean) {
    this.childLoading = value;
  }

  changeChildError(value: any) {
    this.childError = value;
  }
}

describe("SearchComponent", () => {
  let hostComponent: SearchComponentHost;
  let hostFixture: ComponentFixture<SearchComponentHost>;
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent, SearchComponentHost],
      imports: [ReactiveFormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  // Set-up wrapper
  beforeEach(() => {
    hostFixture = TestBed.createComponent(SearchComponentHost);
    hostComponent = hostFixture.componentInstance;
    hostFixture.detectChanges();
    expect(hostComponent).toBeTruthy();
  });

  // Set-up wrapper
  beforeEach(() => {
    hostFixture = TestBed.createComponent(SearchComponentHost);
    hostComponent = hostFixture.componentInstance;
    hostFixture.detectChanges();
    expect(hostComponent).toBeTruthy();
  });

  // Set-up component
  it("should create wrapper component", () => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create search component", () => {
    expect(component).toBeTruthy();
  });

  describe("#events", () => {
    it("should emit onSearch event with correct value", () => {
      spyOn(hostComponent, "onSearchCallback");

      hostFixture.whenStable().then(() => {
        const input = hostFixture.debugElement.query(
          By.css("[data-testid='search-component-input'")
        );

        const element = input.nativeElement;
        element.value = "London";
        element.dispatchEvent(new Event("input"));
        hostFixture.detectChanges();

        const submitButton = hostFixture.debugElement.query(
          By.css("[data-testid='search-component-submit']")
        );
        expect(submitButton).toBeTruthy();

        submitButton.nativeElement.click();

        expect(hostComponent.onSearchCallback).toHaveBeenCalledWith("London");
      });
    });
  });

  describe("#inputs", () => {
    it("should have correct loading input value after toggling it", () => {
      hostComponent.changeChildLoading(true);
      hostFixture.detectChanges();

      expect(hostComponent.searchComponent.loading).toBe(true);

      hostComponent.changeChildLoading(false);
      hostFixture.detectChanges();

      expect(hostComponent.searchComponent.loading).toBe(false);
    });
    it("should have error with correct text", () => {
      const ERROR_VALUE = {
        error: {
          message: "ERROR-123"
        }
      };
      hostComponent.changeChildError(ERROR_VALUE);
      hostFixture.detectChanges();

      expect(hostComponent.searchComponent.error).toBe(ERROR_VALUE);
    });
  });
});
