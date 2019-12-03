import { Component, OnInit } from '@angular/core';

@Component({
  //Element sel 'app-servers', attr sel '[app-servers]', 
  //class sel '.app-server' 
  selector: 'app-servers',
  templateUrl: './servers.component.html'
})
export class ServersComponent implements OnInit {
  disableNewServer = true
  serverName = ''
  showMessage = false;

  constructor() {
    setTimeout(() => {
      this.disableNewServer = false;
    }, 3000);
  }

  ngOnInit() {
  }

  addNewServer() {
    this.showMessage = true
  }

  updateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
