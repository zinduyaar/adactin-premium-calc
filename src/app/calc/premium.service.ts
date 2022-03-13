import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CalculatePremiumRequestModel } from '../models/calculate-premium.request.model';

@Injectable({
  providedIn: 'root'
})
export class PremiumService {
  private readonly baseUrl = 'https://localhost:7254/api';
  private readonly calculatePremiumUrl = '/premium/calculate'

  constructor(private _httpClient: HttpClient) {
  }

  calculatePremium(calcPremiumRequest: CalculatePremiumRequestModel) {
    return this._httpClient.post<number>(this.baseUrl + this.calculatePremiumUrl, calcPremiumRequest);
  }
}
