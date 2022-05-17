import { Component, OnInit } from '@angular/core';
import { AppData } from '../AppData';
import { PhoneDataService } from '../phone-data.service';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {

  data: AppData
  data1: number;
  data2: number;
  result: number;


  constructor(service: PhoneDataService)
  {
    this.data = service.data;
    this.data1 = 0;
    this.data2 = 0;
    this.result = 0;
  }
 
  ngOnInit(): void {
  }
  onAdd() {
    this.result=this.data1+this.data2;
  }

}
