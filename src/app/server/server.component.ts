import { Component } from "@angular/core"

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: ['.online{color: green}, .offline{color: red}']
})
export class ServerComponent {
    serverId = 11
    status = 'Online'

    constructor() {
        this.status = Math.random() > 0.5 ? 'Online' : 'Offline'
    }

    getColor(): String {
        return this.status == 'Online' ? 'green' : 'red'
    }
}