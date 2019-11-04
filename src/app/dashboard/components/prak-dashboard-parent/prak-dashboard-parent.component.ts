import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'dash-prak-dashboard-parent',
  templateUrl: './prak-dashboard-parent.component.html',
  styleUrls: ['./prak-dashboard-parent.component.scss']
})
export class PrakDashboardParentComponent implements OnInit {

  @Input() sidebarBgClass = '';
  constructor() { }

  ngOnInit() {
  }

}
