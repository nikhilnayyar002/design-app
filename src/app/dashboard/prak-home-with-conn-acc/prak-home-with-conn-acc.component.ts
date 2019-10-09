import { Component, OnInit } from "@angular/core";
import { ACCOUNTS_DISPLAYED_COLUMNS, ACCOUNTS_DATA, ACCOUNTS} from '../../global/global'

@Component({
  selector: "dash-prak-home-with-conn-acc",
  templateUrl: "./prak-home-with-conn-acc.component.html",
  styleUrls: ["./prak-home-with-conn-acc.component.css"]
})
export class PrakHomeWithConnAccComponent implements OnInit {

  displayedColumns =  ACCOUNTS_DISPLAYED_COLUMNS;
  dataSource = ACCOUNTS_DATA;
  accountsSource = ACCOUNTS;
  title = "Prakriti's Home";
  userName = "Prakriti Malik";

  constructor() {}

  ngOnInit() {}
}
