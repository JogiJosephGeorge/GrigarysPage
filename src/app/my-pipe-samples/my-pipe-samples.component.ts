import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-pipe-samples',
  templateUrl: './my-pipe-samples.component.html',
  styleUrls: ['./my-pipe-samples.component.css']
})
export class MyPipeSamplesComponent implements OnInit {
  data3: number;
  data4: number;
  name1: string;
  currentDate: Date;
  names: Array<string>;
 
  constructor() {
    this.data3 = 0;
    this.data4 = 0;
    this.name1 = "";
    this.currentDate = new Date();
    this.names =  ["Grigary", "Varghese", "Joy", "Kolenchery", "Choondi"];
  }


  ngOnInit(): void {
  }

}
