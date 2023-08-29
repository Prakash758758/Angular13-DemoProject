import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustTableService {

  constructor() { }
  setColumnDef(apiResponse: any) {
  return Object.keys(apiResponse[0]).map((x: any) => ({
      columnDef: x,
      header: x
    }));

  }
}
