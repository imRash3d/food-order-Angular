import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {
  @Input() placeholder: string; // placeholder for input filed
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onSelectedDate = new EventEmitter;
  constructor() {
    const date = new Date();
    this.placeholder = 'Select Delivery date';
  }

  ngOnInit() {
  }
  selectDate(e) {
    const formatDate = e.year + '-' + e.month + '-' + e.day;
    this.onSelectedDate.emit(formatDate);
  }
}
