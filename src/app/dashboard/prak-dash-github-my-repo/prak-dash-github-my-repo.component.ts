import { Component, OnInit } from "@angular/core";
import { REPOSITORY_DATA, REPOSITORY_COLUMN } from "../../global/global";
import { PageEvent } from "@angular/material/paginator";

@Component({
  selector: "app-prak-dash-github-my-repo",
  templateUrl: "./prak-dash-github-my-repo.component.html",
  styleUrls: ["./prak-dash-github-my-repo.component.css"]
})
export class PrakDashGithubMyRepoComponent {
  /** All related to setting up the table */
  displayedColumns = REPOSITORY_COLUMN;
  dataSource = REPOSITORY_DATA;

  /** All related to setting up the mat-paginator */
  length = REPOSITORY_DATA.length;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  /** dynamic values for displaying rows based on following properties */
  pageIndex: number = 0;
  skip: number = 0;

  // pageSizeOptions: number[] = (function(){
  //   let arr:number[] = [], maxOptions = REPOSITORY_DATA.length/5 + 1;
  //   for(let i=1;i<=maxOptions;++i) arr.push(5*i);
  //   return arr
  // }());

  /** constant values for min and max dates; obtained from sourceData sorted in descending order */
  minDate: Date = REPOSITORY_DATA.length
    ? REPOSITORY_DATA[REPOSITORY_DATA.length - 1].latest_commit
    : null;
  maxDate: Date = REPOSITORY_DATA.length
    ? REPOSITORY_DATA[0].latest_commit
    : null;

  /** dynamic values for displaying rows based on following properties */
  startDate: string = this.minDate.toString();
  endDate: string = this.maxDate.toString();

  constructor() {}

  ngOnInit(): void {
    this.updateTable();
  }

  /** when mat-paginator event occur's, update dataSource from original without doing
   *  any filteration required based on start and end date.
   */
  onPaginatorClick(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.skip = event.pageSize * event.pageIndex;
    this.updateTable();
  }
  updateTable() {
    this.dataSource = REPOSITORY_DATA.slice(
      this.skip,
      this.skip + this.pageSize
    );
  }

  /** when date-picker event occur's, update dataSource from original without doing
   *  any filteration required based on paginator options.
   */
  filterByDate(startDate: string, endDate: string) {
    if (!startDate) startDate = this.startDate;
    else this.startDate = startDate;
    if (!endDate) endDate = this.endDate;
    else {
      /** set the hour of time from 00 to 24 as when filtering
       *  data whose time hours will be something less than 24. If we dont do this,
       *  we may not get the latest row in the table.
       */
      let temp = new Date(endDate);
      temp.setHours(24);
      endDate = this.endDate = temp.toString();
    }

    let startMillSec = new Date(startDate).getTime();
    let endMillSec = new Date(endDate).getTime();

    this.dataSource = REPOSITORY_DATA.filter(data => {
      let dateMillSec = data.latest_commit.getTime();
      return dateMillSec >= startMillSec && dateMillSec <= endMillSec;
    });
  }

  filterByText(str) {
    this.dataSource = REPOSITORY_DATA.filter(d => d.repo.includes(str))
  }
}
