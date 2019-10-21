import { Component } from "@angular/core";
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormBuilder
} from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched)
    );
  }
}

@Component({
  selector: 'app-datapod-sign-in',
  templateUrl: './datapod-sign-in.component.html',
  styleUrls: ['./datapod-sign-in.component.css']
})
export class DatapodSignInComponent {
  form = this.fb.group({
    userName: ["", [Validators.required]],
    psw: ["",[Validators.required]],
  });

  get psw(): any {
    return this.form.get("psw") as FormControl;
  }
  get userName(): any {
    return this.form.get("userName") as FormControl;
  }
  matcher = new MyErrorStateMatcher();

  constructor(private fb: FormBuilder) {}
}
