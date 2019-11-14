import { Component, OnInit } from '@angular/core';
import { HeaderLinks, SidebarLinks } from '../../global/types';

@Component({
  selector: 'app-prak-dash-google',
  templateUrl: './prak-dash-google.component.html',
  styleUrls: ['./prak-dash-google.component.css']
})
export class PrakDashGoogleComponent implements OnInit {


  headerLinks:HeaderLinks[] = [
    {image:"assets/icons/home.svg", label:"Dashboard", url:"./"},
    {image:"assets/icons/google-color.svg", label:"prakriti.malik", url:"./"},
  ];

  sidebarLinks:SidebarLinks[] = [
    {image:"assets/icons/google3-white.svg", label:"prakriti.malik", url:"./", selected:true},
    {image:"assets/icons/cart.svg", label:"Purchases", url:"./", selected:false},
    {image:"assets/icons/location.svg", label:"Locations", url:"./", selected:false},
    {image:"assets/icons/airplane.svg", label:"Flights", url:"./", selected:false},
    {image:"assets/icons/camera.svg", label:"Photos", url:"./", selected:false},
  ]

  constructor() { }

  ngOnInit() {
  }

}
