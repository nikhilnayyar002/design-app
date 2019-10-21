import { Component, OnInit } from '@angular/core';
import { Sync_Frequency } from '../../global/types';

@Component({
  selector: 'app-prak-dash-github',
  templateUrl: './prak-dash-github.component.html',
  styleUrls: ['./prak-dash-github.component.css']
})
export class PrakDashGithubComponent implements OnInit {

  constructor() { }

  sync_freq_options:Sync_Frequency[] = [
    Sync_Frequency.Monthly,
    Sync_Frequency.Weekly
  ];
  sync_freq_selected:Sync_Frequency = Sync_Frequency.Weekly;

  ngOnInit() {
  }

}
