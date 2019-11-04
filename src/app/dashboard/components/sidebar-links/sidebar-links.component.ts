import { Component, OnInit, Input } from '@angular/core';
import { SidebarLinks } from '../../../global/types';

@Component({
  selector: 'dash-sidebar-links',
  templateUrl: './sidebar-links.component.html',
  styleUrls: ['./sidebar-links.component.scss']
})
export class SidebarLinksComponent implements OnInit {

  constructor() { }
  @Input() links:SidebarLinks[] =null;
  @Input() mainLink:SidebarLinks = null;
  @Input() linksColorClass = "";

  ngOnInit() {
  }

}
