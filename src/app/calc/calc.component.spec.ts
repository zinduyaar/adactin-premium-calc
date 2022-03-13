import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { of } from 'rxjs';

import { CalcComponent } from './calc.component';
import { PremiumService } from './premium.service';

describe('CalcComponent', () => {
  let component: CalcComponent;
  let fixture: ComponentFixture<CalcComponent>;
  let fakePremiumService: PremiumService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalcComponent],
      providers: [{ provide: PremiumService, useValue: fakePremiumService }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

  });
  describe('validateForm', () => {

    it('should fail as Full Name is empty', () => {
      component.fullName = '';
      component.age = 31;
      component.sumAssured = 1000;
      component.selectedOccupation = 2;

      expect(component.validateForm()).toBe(false);
    });

    it('should fail as Age is 0', () => {
      component.fullName = 'Aman';
      component.age = 0;
      component.sumAssured = 1000;
      component.selectedOccupation = 2;

      expect(component.validateForm()).toBe(false);
    });

    it('should fail as sumAssured is 0', () => {
      component.fullName = 'Aman';
      component.age = 31;
      component.sumAssured = 0;
      component.selectedOccupation = 2;

      expect(component.validateForm()).toBe(false);
    });
    it('should pass', () => {
      component.fullName = 'Aman';
      component.age = 31;
      component.sumAssured = 1000;
      component.selectedOccupation = 2;

      expect(component.validateForm()).toBe(true);
    });
  });
  
});
