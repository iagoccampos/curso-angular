import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styles: ['.active{color: white}']
})
export class DetailsComponent implements OnInit {
  logs = []
  display = false

  constructor() { }

  ngOnInit() {
  }

  toggleDisplay() {
    this.logs.push(new Date())
    this.display = !this.display
  }

  getColor(): String {
    return this.logs.length > 4 ? 'blue' : 'none'
  }
}
