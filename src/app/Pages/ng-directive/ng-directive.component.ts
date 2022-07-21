import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-directive',
  templateUrl: './ng-directive.component.html',
  styleUrls: ['./ng-directive.component.scss']
})
export class NgDirectiveComponent implements OnInit, OnDestroy {
  isValue: number = 1;
  isValue1: number = 5;
  
  countryList: any = [];
  objRow: any;

  constructor() { }


  ngOnInit(): void {

    //Api
    
    this.countryList = [
      { CountryID: 1, CountryName: 'India' },
      { CountryID: 2, CountryName: 'England' },
      { CountryID: 3, CountryName: 'USA' },
      { CountryID: 4, CountryName: 'France' }]
  }


  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

}
