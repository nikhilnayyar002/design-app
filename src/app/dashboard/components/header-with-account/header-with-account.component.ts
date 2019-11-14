import { Component, OnInit, Input } from '@angular/core';
import { HeaderLinks } from '../../../global/types';

@Component({
  selector: 'dash-header-with-account',
  templateUrl: './header-with-account.component.html',
  styleUrls: ['./header-with-account.component.scss']
})
export class HeaderWithAccountComponent implements OnInit {

  constructor() { }
  @Input() links:HeaderLinks[] =null;
  @Input() userName = "";
  ngOnInit() {
  }

}
