import { Component, ViewChild } from '@angular/core';
import { MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table'

import { RestApiCallsService } from '../app/services/rest-api-calls.service'


export interface TableElement{
  id:number;
  name:string;
  email:string;
  website:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  Data: TableElement[] = [];
  col: string[] = ['id','name','email','website'];
  dataSource = new MatTableDataSource<TableElement>(this.Data);
  @ViewChild(MatPaginator, {static:true} ) paginator!: MatPaginator;

  constructor(private apiCallService:RestApiCallsService){
    this.apiCallService.getUsers().subscribe((res) => {
      this.dataSource = new MatTableDataSource<TableElement>(res);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      },0);
    },
    (error) => {
      console.log("api error",error);
    });
  }
}
