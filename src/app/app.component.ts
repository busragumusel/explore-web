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
    this.appService.getCategories().subscribe(
      (res) => {
        this.categoryList = res.response.categories;
      },
      () => {
        this.categoryList = [];
      }
    );
  }

  getLocations(name) {
    this.appService.getLocations(name).subscribe(
      (res) => {
        this.locationList = res.response.groups[0].items;
      },
      () => {
        this.locationList = [];
      }
    );
  }
}
