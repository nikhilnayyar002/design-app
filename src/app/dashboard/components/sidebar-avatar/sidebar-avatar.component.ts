import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dash-sidebar-avatar',
  templateUrl: './sidebar-avatar.component.html',
  styleUrls: ['./sidebar-avatar.component.scss']
})
export class SidebarAvatarComponent implements OnInit {

  @Input("image") img:string;
  @Input("name") name:string;
  constructor() { }

  ngOnInit() {
  }

}
