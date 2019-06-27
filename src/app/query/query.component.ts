import { Component, OnInit } from '@angular/core';
import { QueryService } from '../shared/query.service';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {
  workingData:any;
  working:boolean=false;
  rowData:any;
  constructor(private queryService : QueryService, private http: HttpClient) { }

  ngOnInit() {
    this.rowData = this.http.get('http://localhost:49629/api/OrderItems');  //https://api.myjson.com/bins/15psn9
  }

  testAPI(){
    this.queryService.queryResult().subscribe((data : any)=>{
      this.workingData=data;
      this.working=true;
      console.log(data);
    },
    (err : HttpErrorResponse)=>{
      console.log('Error');
    });
  }

  title = 'app';

  columnDefs = [
    {headerName: 'Id', field: 'Id', sortable: true, filter: true},
    {headerName: 'OrderId', field: 'OrderId', sortable: true, filter: true},
    {headerName: 'ProductId', field: 'ProductId', sortable: true, filter: true},
    {headerName: 'Quantity', field: 'Quantity', sortable: true, filter: true},
    {headerName: 'UnitPrice', field: 'UnitPrice', sortable: true, filter: true}
  ]; 

  // rowData = [
  //   { make: 'Toyota', model: 'Celica', price: 35000 },
  //   { make: 'Ford', model: 'Mondeo', price: 32000 },
  //   { make: 'Porsche', model: 'Boxter', price: 72000 }
  // ];

}
