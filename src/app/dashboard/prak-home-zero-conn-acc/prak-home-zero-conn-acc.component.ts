import { Component, OnInit } from "@angular/core";
import {
  ACCOUNTS_DISPLAYED_COLUMNS,
  ACCOUNTS
} from "../../global/global";
import { HeaderLinks, SidebarLinks } from "../../global/types";

@Component({
  selector: "dash-prak-home-zero-conn-acc",
  templateUrl: "./prak-home-zero-conn-acc.component.html",
  styleUrls: ["./prak-home-zero-conn-acc.component.css"]
})
export class PrakHomeZeroConnAccComponent implements OnInit {

  displayedColumns = ACCOUNTS_DISPLAYED_COLUMNS;
  dataSource = null;
  accountsSource = ACCOUNTS;
  userName = "Prakriti Malik";

  headerLinks:HeaderLinks[] = [
    {image:"", label:"Prakriti's Home", url:"./"},
  ];

  sidebarLinks:SidebarLinks[] = [
    {image:"assets/icons/sidebar-home.svg", label:"Prakriti's Home", url:"./", selected:false},
    {image:"assets/icons/account-setting.svg", label:"Account Settings", url:"./", selected:false},
  ]

  constructor() {}

  ngOnInit() {}
}
