import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  username = ''

  constructor() { }

  ngOnInit() {
  }

  usernameIsEmpty(): boolean {
    return this.username == ''
  }

  send() {
    this.username = ''
  }
}
