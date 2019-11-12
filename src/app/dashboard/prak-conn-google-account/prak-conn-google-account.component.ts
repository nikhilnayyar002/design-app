import { Component, OnInit, ViewChild, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { HeaderLinks } from '../../global/types';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-prak-conn-google-account',
  templateUrl: './prak-conn-google-account.component.html',
  styleUrls: ['./prak-conn-google-account.component.scss']
})
export class PrakConnGoogleAccountComponent {
  

  headerLinks:HeaderLinks[] = [
    {image:"assets/icons/home.svg", label:"Dashboard", url:"./"},
    {image:"assets/icons/google-color.svg", label:"Connect Google Account", url:"./"},
  ];

  userName:string;
  preferred_username:string;

  @ViewChild('stepper',{static:false}) stepper:MatStepper;
  @ViewChild('stepTwo',{static:false}) stepTwo;
  @ViewChild('stepThree',{static:false}) stepThree;
  setStepState(step:any, stepper:any, nav:"next"|"prev") {
    if(nav=="next") {
      step.completed = true;
      step.editable = false;
      stepper.next();
      if(step === this.stepTwo) {
        setTimeout(() => {
          this.stepThree.completed = true;
          this.stepThree.editable = false;
          stepper.next();
        }, 1500);
      }
    } else {
      step.completed = false;
      step.editable = true;
      stepper.previous();  
    } 
  }

  file: File | null = null;
  onTakeout(target): void {
    const files: { [key: string]: File } = target.files;
    this.file = files[0];
    console.log(this.file)
  }

  goToStepper(index: number) {
    let indexLabel = index.toString();
    this.stepper.steps.forEach(step =>{
      if(step.label < indexLabel) {
        step.completed = true;
        step.editable = false;
      }
    })
    this.stepper.selectedIndex = index;
  }
  
  ngAfterViewInit() {
    setTimeout(() => {
      this.goToStepper(3)
    }, 0);
  }
}
