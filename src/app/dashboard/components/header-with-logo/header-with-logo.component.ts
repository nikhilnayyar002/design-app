import { Component, OnInit, Input } from '@angular/core';
import { HeaderLinks } from '../../../global/types';



@Component({
  selector: 'dash-header-with-logo',
  templateUrl: './header-with-logo.component.html',
  styleUrls: ['./header-with-logo.component.scss']
})
export class HeaderWithLogoComponent implements OnInit {

  @Input() links:HeaderLinks[] =null;
  constructor() { }
  ngOnInit() {
  }

}
