import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface User{
  id:number;
  name:string;
  email:string;
  website:string;
  // profession:string;
}

@Injectable({
  providedIn: 'root'
})

export class RestApiCallsService {

  api:string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http:HttpClient) { }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(`${this.api}`);
  }
}
