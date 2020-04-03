import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'explore-web';
  categoryList;
  locationList;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.categoryList = this.appService.getCategories();
  }

  getLocations(name) {
    this.locationList = this.appService.getLocations(name);
  }
}
