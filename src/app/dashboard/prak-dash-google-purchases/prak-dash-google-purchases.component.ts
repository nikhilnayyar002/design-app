import { Component, OnInit } from '@angular/core';
import { PURCHASE_COLUMNS, PURCHASE_DATA } from '../../global/global';
import { HeaderLinks, SidebarLinks } from '../../global/types';




@Component({
  selector: 'app-prak-dash-google-purchases',
  templateUrl: './prak-dash-google-purchases.component.html',
  styleUrls: ['./prak-dash-google-purchases.component.css']
})
export class PrakDashGooglePurchasesComponent implements OnInit {

  displayedColumns =  PURCHASE_COLUMNS;
  dataSource = PURCHASE_DATA;
  display:"grid"|"list" = "grid";


  headerLinks:HeaderLinks[] = [
    {image:"assets/icons/home.svg", label:"Dashboard", url:"./"},
    {image:"assets/icons/google-color.svg", label:"prakriti.malik", url:"./"},
    {image:"assets/icons/cart-black.svg", label:"Purchases", url:"./"},
  ];

  sidebarLinks:SidebarLinks[] = [
    {image:"assets/icons/google3-white.svg", label:"prakriti.malik", url:"./", selected:false},
    {image:"assets/icons/cart.svg", label:"Purchases", url:"./", selected:true},
    {image:"assets/icons/location.svg", label:"Locations", url:"./", selected:false},
    {image:"assets/icons/airplane.svg", label:"Flights", url:"./", selected:false},
    {image:"assets/icons/camera.svg", label:"Photos", url:"./", selected:false},
  ]


  constructor() { }

  ngOnInit() {
  }

}


// import { ACCOUNTS_DISPLAYED_COLUMNS, ACCOUNTS_DATA, ACCOUNTS} from '../../global/global'

// @Component({
//   selector: "dash-prak-home-with-conn-acc",
//   templateUrl: "./prak-home-with-conn-acc.component.html",
//   styleUrls: ["./prak-home-with-conn-acc.component.css"]
// })
// export class PrakHomeWithConnAccComponent implements OnInit {

//   displayedColumns =  ACCOUNTS_DISPLAYED_COLUMNS;
//   dataSource = ACCOUNTS_DATA;
//   accountsSource = ACCOUNTS;