import { Component } from "@angular/core";
import {
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from "@angular/forms";

@Component({
  selector: "app-datapod-verify-email",
  templateUrl: "./datapod-verify-email.component.html",
  styleUrls: ["./datapod-verify-email.component.css"]
})
export class DatapodVerifyEmailComponent {

  digitsPattern = "^[0-9]+$";

  form = this.fb.group({
    inputs: this.fb.array(
      [1, 2, 3, 4, 5, 6].map(
        () =>
          new FormControl("", [
            Validators.required,
            Validators.pattern(this.digitsPattern),
            Validators.maxLength(1)
          ])
      )
    )
  });

  constructor(private fb: FormBuilder) {}

  get inputs() {
    return this.form.get("inputs") as FormArray;
  }
}
