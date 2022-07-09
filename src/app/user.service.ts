import { Injectable } from '@angular/core';
import {User} from './user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  students: User[] = [{
    id: 1,
    name: 'Krunal',
    mobile: 970435621,
    password: 'Krunal@123',
    address: 'Hyderabad'
},
{
    id: 2,
    name: 'Rushabh',
    mobile: 895467324,
    password: 'Rishab@231',
    address: 'Ranchi'
},
{
    id: 3,
    name: 'Anisha',
    mobile: 6300456721,
    password: 'Anisha@342',
    address: 'Lucknow'
}];

  constructor() { }

  public getUsers(): any {
    const usersObservable$ = new Observable(observer => {
           setTimeout(() => {
               observer.next(this.students);
           }, 1000);
    });

    return usersObservable$;
}
}
