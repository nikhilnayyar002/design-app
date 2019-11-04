import { Component, OnInit } from '@angular/core';
import { Sync_Frequency, HeaderLinks, SidebarLinks } from '../../global/types';

@Component({
  selector: 'app-prak-dash-github',
  templateUrl: './prak-dash-github.component.html',
  styleUrls: ['./prak-dash-github.component.css']
})
export class PrakDashGithubComponent implements OnInit {

  constructor() { }

  headerLinks:HeaderLinks[] = [
    {image:"assets/icons/home.svg", label:"Dashboard", url:"./"},
    {image:"assets/icons/github.svg", label:"prakritimalik", url:"./"},
  ];

  sidebarLinks:SidebarLinks[] = [
    {image:"assets/icons/github-white.svg", label:"prakriti.malik", url:"./", selected:true},
    {image:"assets/icons/account-person.svg", label:"My Repositories", url:"./", selected:false},
    {image:"assets/icons/star_border.svg", label:"Starred Repositories", url:"./", selected:false},
  ]

  sync_freq_options:Sync_Frequency[] = [
    Sync_Frequency.Monthly,
    Sync_Frequency.Weekly
  ];
  sync_freq_selected:Sync_Frequency = Sync_Frequency.Weekly;

  ngOnInit() {
  }

}
