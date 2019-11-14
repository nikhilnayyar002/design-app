import { Component, OnInit } from "@angular/core";
import { ACCOUNTS_DISPLAYED_COLUMNS, ACCOUNTS_DATA, ACCOUNTS} from '../../global/global'
import { HeaderLinks, SidebarLinks } from "../../global/types";

@Component({
  selector: "dash-prak-home-with-conn-acc",
  templateUrl: "./prak-home-with-conn-acc.component.html",
  styleUrls: ["./prak-home-with-conn-acc.component.css"]
})
export class PrakHomeWithConnAccComponent implements OnInit {

  displayedColumns =  ACCOUNTS_DISPLAYED_COLUMNS;
  dataSource = ACCOUNTS_DATA;
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
