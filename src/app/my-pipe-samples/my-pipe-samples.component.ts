import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-pipe-samples',
  templateUrl: './my-pipe-samples.component.html',
  styleUrls: ['./my-pipe-samples.component.css']
})
export class MyPipeSamplesComponent implements OnInit {
  data3: number;
  data4: number;
  constructor() {
    this.data3 = 0;
    this.data4 = 0;}
  currentDate = new Date();
  date = new Date();

  ngOnInit(): void {
  }

}
