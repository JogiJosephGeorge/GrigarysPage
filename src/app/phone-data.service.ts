import { Injectable } from '@angular/core';
import { AppData } from './AppData';

@Injectable({
  providedIn: 'root'
})
export class PhoneDataService {

  data: AppData
  constructor() { this.data = new AppData(); }
}
