import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dash-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() title = "";
  @Input() userName = "";

  constructor() { }

  ngOnInit() {
  }

}
