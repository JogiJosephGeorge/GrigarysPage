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
  data1: any;
  data2: any;
  result: any;


  constructor(service: PhoneDataService)
  {
    this.data = service.data;
  }
 
  ngOnInit(): void {
  }

}
