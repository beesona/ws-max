import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-bar',
  templateUrl: './right-bar.component.html',
  styleUrls: ['./right-bar.component.css']
})
export class RightBarComponent implements OnInit {

  showRight: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  toggleRight(): void {

  }
}
