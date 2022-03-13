import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { CalculatePremiumRequestModel } from '../models/calculate-premium.request.model';
import { OccupationList } from '../models/occupation.enum';
import { PremiumService } from './premium.service';

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
  calculatedPremium: number;
  errors: any = {};
  constructor(private _premiumService: PremiumService) {
    this.occupations = OccupationList;
    this.fullName = '';
    this.sumAssured = 0;
    const currentDate = new Date();
    // max age supported = 100 years
    this.minDateForDOBPicker = new Date(currentDate.getFullYear() - 101, currentDate.getMonth(), currentDate.getDate());
    this.maxDateForDOBPicker = new Date(currentDate.getFullYear() - 1, currentDate.getMonth(), currentDate.getDate());;
    this.age = 0;
    this.calculatedPremium = 0;
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
    // return !(!this.fullName) && this.age > 0 && this.sumAssured > 0 && this.selectedOccupation > 0;
    return true;
  }

  fetchPremium() {
    this.calculatedPremium = 0;
    this.errors = {};
    const requestBody: CalculatePremiumRequestModel = {
      FullName: this.fullName,
      Age: this.age,
      DeathSumAssured: this.sumAssured,
      OccupationId: this.selectedOccupation
    }
    this._premiumService.calculatePremium(requestBody).subscribe(result => {
      this.calculatedPremium = result;
    },
      error => {
        this.errors = error.error.errors;
      })
  }
}
