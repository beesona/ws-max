import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-bar',
  templateUrl: './right-bar.component.html',
  styleUrls: ['./right-bar.component.css']
})
export class RightBarComponent implements OnInit {

  rightVisibility: string = "display: block;"
  showRight: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  toggleRight(): void {
    this.showRight = !this.showRight;
    if (this.showRight){
      this.rightVisibility = "display: block !important;"
    }else{
      this.rightVisibility = ""
    }
  }
}
