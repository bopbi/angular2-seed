import {Component, OnInit} from '@angular/core';
import {BaconService} from '../services/bacon.service';

@Component({
  selector: 'app',
  template: `
  <h1>Hello {{ name }}!</h1>
  <ul>
  <li *ngFor="let bacon of bacons">{{bacon}}</li>
  </ul>
  `,
  providers: [
    BaconService,
  ]})

export class AppComponent implements OnInit {
  name: string;
  bacons: Array<string>;
  error: any;
  constructor(private baconService: BaconService) {
    this.name = 'Angular 2';
    this.bacons = ["Loading..."];
  }

  getBacons() {
      this.baconService
      .getBacons()
      .subscribe(bacons => {
          this.bacons = bacons;
        }, 
          error =>  this.error = <any>error);
  }

  ngOnInit() {
    this.getBacons();
  }
}