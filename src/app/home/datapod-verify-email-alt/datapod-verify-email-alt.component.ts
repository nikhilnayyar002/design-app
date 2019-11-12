import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datapod-verify-email-alt',
  templateUrl: './datapod-verify-email-alt.component.html',
  styleUrls: ['./datapod-verify-email-alt.component.scss']
})
export class DatapodVerifyEmailAltComponent implements OnInit {

  digitsPattern = "^[0-9]+$";

  constructor() { }

  ngOnInit() {
  }

}
