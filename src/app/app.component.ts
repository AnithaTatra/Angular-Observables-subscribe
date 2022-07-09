import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
 
  users: User[] = [];

  constructor(private userService : UserService){}

  ngOnInit() {
    const usersObservable = this.userService.getUsers();
    usersObservable.subscribe((usersData: User[]) => {
        this.users = usersData;
    });
  }
  
}
