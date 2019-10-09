import { Component, OnInit } from "@angular/core";
import {
  ACCOUNTS_DISPLAYED_COLUMNS,
  ACCOUNTS_DATA,
  ACCOUNTS
} from "../../global/global";

@Component({
  selector: "dash-prak-home-zero-conn-acc",
  templateUrl: "./prak-home-zero-conn-acc.component.html",
  styleUrls: ["./prak-home-zero-conn-acc.component.css"]
})
export class PrakHomeZeroConnAccComponent implements OnInit {

  displayedColumns = ACCOUNTS_DISPLAYED_COLUMNS;
  dataSource = null;
  accountsSource = ACCOUNTS;
  title = "Prakriti's Home";
  userName = "Prakriti Malik";

  constructor() {}

  ngOnInit() {}
}
