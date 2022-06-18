import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  links: Array<string>;
  constructor() {
    this.links = [
      "All",
      "Seeds",
      "Pots",
      "Pots & Plants",
      "Plant Care",
      "Tools & Accessories",
      "DIY Pest Control",
      "Kits",
      "Offers",
      "Plants",
      "Events"
    ];
  }

  ngOnInit(): void {
  }

}
