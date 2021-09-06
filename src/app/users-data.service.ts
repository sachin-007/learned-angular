import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  constructor() { }
    getData()
    {
      return{
        name:"sachin",
        age:19,
        id:1
      }
    }
   }
