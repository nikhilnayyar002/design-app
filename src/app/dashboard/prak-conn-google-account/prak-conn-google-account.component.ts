import { Component, OnInit, ViewChild, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { HeaderLinks } from '../../global/types';

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
  constructor(
    private cdr:ChangeDetectorRef
  ) { }

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

  @ViewChild('fileInput',{static:false}) fileInput;
  file: File | null = null;
  onClickFileInputButton(): void {
    this.fileInput.nativeElement.click();
  }
  onChangeFileInput(): void {
    const files: { [key: string]: File } = this.fileInput.nativeElement.files;
    this.file = files[0];
  }
}
