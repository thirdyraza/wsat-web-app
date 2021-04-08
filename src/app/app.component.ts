import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wsat-web-app';
  logo : string = "assets/images/bcsat-logo.png";
  searchIcon : string = "assets/images/search-icon.png";
}
