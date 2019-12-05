import { Component, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html'
})
export class HeaderComponent {
    @Output() onSelectedType = new EventEmitter<string>()

    select(pageToLoad: string) {
        this.onSelectedType.emit(pageToLoad);
    }
}