import { Component, OnInit, ViewChild, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-prak-conn-google-account',
  templateUrl: './prak-conn-google-account.component.html',
  styleUrls: ['./prak-conn-google-account.component.css']
})
export class PrakConnGoogleAccountComponent {
  isEditable = false;
  constructor(
    private cdr:ChangeDetectorRef
  ) { }

  @ViewChild('fileInput',{static:false}) fileInput;

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
  onClickFileInputButton(): void {
    this.fileInput.nativeElement.click();
  }
  onChangeFileInput(): void {
    const files: { [key: string]: File } = this.fileInput.nativeElement.files;
    this.file = files[0];
  }
}
