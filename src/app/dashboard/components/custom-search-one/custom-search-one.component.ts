import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import {
  map,
  debounceTime,
  distinctUntilChanged,
  filter
} from "rxjs/operators";

@Component({
  selector: "dash-custom-search-one",
  templateUrl: "./custom-search-one.component.html",
  styleUrls: ["./custom-search-one.component.css"]
})
export class CustomSearchOneComponent implements OnInit {
  @Input() minDate;
  @Input() maxDate;

  @Output() searchText = new EventEmitter<string>();
  @Output() startDate = new EventEmitter<string>();
  @Output() endDate = new EventEmitter<string>();

  searchTerm = new Subject<string>();

  constructor() {
    this.searchTerm
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        // filter(term => term.length > 0)
      )
      .subscribe(searchterm => {
        this.searchText.emit(searchterm);
      });
  }

  ngOnInit() {}

  changeStartDate = e =>
    e && e.target ? this.startDate.emit(e.target.value) : null;
  changeEndDate = e =>
    e && e.target ? this.endDate.emit(e.target.value) : null;
  searchEvent = e =>
    e && e.target ? this.searchTerm.next(e.target.value) : null;
}
