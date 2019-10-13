import { Component, OnInit } from '@angular/core';
import { PURCHASE_COLUMNS, PURCHASE_DATA } from '../../global/global';




@Component({
  selector: 'app-prak-dash-google-purchases',
  templateUrl: './prak-dash-google-purchases.component.html',
  styleUrls: ['./prak-dash-google-purchases.component.css']
})
export class PrakDashGooglePurchasesComponent implements OnInit {

  displayedColumns =  PURCHASE_COLUMNS;
  dataSource = PURCHASE_DATA;
  display:"grid"|"list" = "grid";

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