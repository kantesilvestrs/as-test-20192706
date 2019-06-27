import { Component, Output, EventEmitter, Input } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html"
})
export class SearchComponent {
  @Input() loading: boolean;
  @Input() error: any;
  @Output() onSearch = new EventEmitter<string>();

  searchFormGroup: FormGroup;

  get isSubmitDisabled() {
    return this.loading || !this.searchFormGroup.valid;
  }

  constructor(private formBuilder: FormBuilder) {
    this.searchFormGroup = this.formBuilder.group({
      city: ["", Validators.required]
    });
  }

  searchCity() {
    if (this.searchFormGroup.valid) {
      this.onSearch.emit(this.searchFormGroup.value.city);
      this.searchFormGroup.reset();
    }
  }
}
