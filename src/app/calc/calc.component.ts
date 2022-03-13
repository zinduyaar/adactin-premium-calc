import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { OccupationList } from '../models/occupation.enum';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnInit {

  occupations;
  fullName: string;
  sumAssured: number;
  selectedOccupation: any;
  minDateForDOBPicker: Date;
  maxDateForDOBPicker: Date;
  age: number;
  constructor() {
    this.occupations = OccupationList;
    this.fullName = '';
    this.sumAssured = 0;
    const currentDate = new Date();
    // max age supported = 100 years
    this.minDateForDOBPicker = new Date(currentDate.getFullYear() - 101, currentDate.getMonth(), currentDate.getDate());
    this.maxDateForDOBPicker = new Date(currentDate.getFullYear() - 1, currentDate.getMonth(), currentDate.getDate());;
    this.age = 0;
  }

  ngOnInit(): void {
  }

  dobOnChange(event: MatDatepickerInputEvent<Date>) {
    if (event.value) {
      var currentDate = new Date();
      var yrs = currentDate.getFullYear() - event.value.getFullYear();
      var m = currentDate.getMonth() - event.value.getMonth();
      if (m < 0 || (m === 0 && currentDate.getDate() < event.value.getDate())) {
        yrs--;
      }
      this.age = yrs;
      return;
    }
    this.age = 0;
  }

  validateAndFetchPremium() {
    if (this.validateForm()) {
      this.fetchPremium();
    }
  }

  validateForm(): boolean {
    return !(!this.fullName) && this.age > 0 && this.sumAssured > 0 && this.selectedOccupation > 0;
  }

  fetchPremium() {
    console.log('api service');
  }
}
