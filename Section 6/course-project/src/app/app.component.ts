import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'course-project'

  loadedPage = 'recipes'

  navigate(type: string) {
    console.log(type)
    this.loadedPage = type
  }
}
