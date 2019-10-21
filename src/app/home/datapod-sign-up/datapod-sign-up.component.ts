import { Component } from "@angular/core";
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormBuilder
} from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { passValidator } from "../../global/global";



const passRegex = /(?=^.{8,20}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/;

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}



@Component({
  selector: "app-datapod-sign-up",
  templateUrl: "./datapod-sign-up.component.html",
  styleUrls: ["./datapod-sign-up.component.css"]
})
export class DatapodSignUpComponent {

  form = this.fb.group({
    userName: ["prakriti", [Validators.required]],
    email: ["prakriti@gmail.com", [Validators.required, Validators.email]],
    psw: [
      "prakritiA#3",
      [Validators.required, passValidator(passRegex, "passSignUpValidator")]
    ],
    name: ["Prakriti Malik", [Validators.required]],
  });

  get email(): any {
    return this.form.get("email") as FormControl;
  }
  get psw(): any {
    return this.form.get("psw") as FormControl;
  }
  get userName(): any {
    return this.form.get("userName") as FormControl;
  }
  get name(): any {
    return this.form.get("name") as FormControl;
  }
  matcher = new MyErrorStateMatcher();

  constructor(private fb: FormBuilder) {}
}

