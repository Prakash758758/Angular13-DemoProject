import { Component, OnInit } from '@angular/core';
import { CustTableService } from 'src/app/Services/cust-table.service';
import { TableButtonAction } from 'src/app/Shared/tableButtonAction';

@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.scss']
})
export class MatTableComponent implements OnInit {
  constructor(private custTableService:CustTableService) { }
  data!: any[];
  columns!: any[];
  tableRefresh: boolean = false;


  ngOnInit() {
    // get data from API 

    this.apiCall();
  }

  apiCall() {
    this.tableRefresh = true;
    this.data = [
      {
        "name": "Molly Pope",
        "date": "Jul 27, 2021",
        "company": "Faucibus Orci Institute",
        "country": "New Zealand",
        "city": "Campinas",
        "phone": "1-403-634-0276",
        "weight": "view"
      },
      {
        "name": "Alfonso Vinson",
        "date": "May 11, 2021",
        "company": "Non Ante Corp.",
        "country": "United Kingdom",
        "city": "Redlands",
        "phone": "1-405-411-6336"
      },
      {
        "name": "Camden David",
        "date": "Aug 6, 2022",
        "company": "Cursus Et LLP",
        "country": "Nigeria",
        "city": "Iguala",
        "phone": "(415) 628-6853"
      },
      {
        "name": "Levi Goff",
        "date": "Nov 3, 2021",
        "company": "Vitae Incorporated",
        "country": "Sweden",
        "city": "Manavgat",
        "phone": "1-545-823-7985"
      },
      {
        "name": "Madaline Leach",
        "date": "Jun 13, 2022",
        "company": "Erat Volutpat Corp.",
        "country": "Chile",
        "city": "Niterói",
        "phone": "1-678-156-9674"
      },
      {
        "name": "Camden David",
        "date": "Aug 6, 2022",
        "company": "Cursus Et LLP",
        "country": "Nigeria",
        "city": "Iguala",
        "phone": "(415) 628-6853"
      },
      {
        "name": "Levi Goff",
        "date": "Nov 3, 2021",
        "company": "Vitae Incorporated",
        "country": "Sweden",
        "city": "Manavgat",
        "phone": "1-545-823-7985"
      },
      {
        "name": "Madaline Leach",
        "date": "Jun 13, 2022",
        "company": "Erat Volutpat Corp.",
        "country": "Chile",
        "city": "Niterói",
        "phone": "1-678-156-9674"
      }
    ];
    this.columns=this.custTableService.setColumnDef(this.data);


  }

  caseNoEvent(caseNo: string) {
    debugger
    if (caseNo == '123') {
      this.data = [{
        "FirstName": "Molly Pope",
        "DOB": "Jul 27, 2021",
        "companyName": "Faucibus Orci Institute",

      },
      {
        "FirstName": "Alfonso Vinson",
        "DOB": "May 11, 2021",
        "companyName": "Non Ante Corp.",
      },];
      this.columns=this.custTableService.setColumnDef(this.data);
      this.tableRefresh = true;
    }
    if (caseNo == '456') {
      this.data = [];
      this.tableRefresh = false;
    }
  }
  onTableAction(event: any) {
    console.log('event', event)
  }
}
