import { Component, ViewChild } from '@angular/core';
import { HeaderLinks } from '../../global/types';
import { MatStepper } from '@angular/material/stepper';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, FormBuilder, Validators } from '@angular/forms';


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
  selector: 'app-prak-conn-github-account',
  templateUrl: './prak-conn-github-account.component.html',
  styleUrls: ['./prak-conn-github-account.component.scss']
})
export class PrakConnGithubAccountComponent {

  headerLinks:HeaderLinks[] = [
    {image:"assets/icons/home.svg", label:"Dashboard", url:"./"},
    {image:"assets/icons/github.svg", label:"Connect GitHub Account", url:"./"},
  ];

  @ViewChild('stepper',{static:false}) stepper:MatStepper;
  @ViewChild('stepOne',{static:false}) stepOne;
  @ViewChild('stepTwo',{static:false}) stepTwo;
  setStepState(step:any, stepper:any, nav:"next"|"prev") {
    if(nav=="next") {
      step.completed = true;
      step.editable = false;
      stepper.next();
      if(step === this.stepOne) { 
        setTimeout(() => {
          this.stepTwo.completed = true;
          this.stepTwo.editable = false;
          stepper.next();
        }, 1500);
      }
    } else {
      step.completed = false;
      step.editable = true;
      stepper.previous();  
    } 
  }

  constructor (private fb:FormBuilder) {}

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

}
