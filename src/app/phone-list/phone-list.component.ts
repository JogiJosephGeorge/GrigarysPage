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


  constructor(service1: PhoneDataService)
  {
    this.data = service1.data;
   
  
  }
 
 
  ngOnInit(): void {
  }
  onAdd() {
    this.data.result=this.data.data1+this.data.data2;
  }

}
