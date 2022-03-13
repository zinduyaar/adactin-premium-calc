import { Component, OnInit } from '@angular/core';
import { OccupationList } from '../models/occupation.enum';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnInit {

  occupations;
  constructor() {
    this.occupations = OccupationList;
  }

  ngOnInit(): void {
  }

}
