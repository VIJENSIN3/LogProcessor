import { Component, OnInit } from '@angular/core';
import { AddUserRequest } from '../../appmodels/adduser.model';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

UserService

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  model: AddUserRequest
  message!: string;
  result!: string;

  constructor(private userService: UserService, private router: Router) {
    this.model = {
      name: '',
      address: ''
    }
  }


  ngOnInit() {

  }

  AddUser() {
    this.userService.addUser(this.model).subscribe({
      next: (response: any) => {
        this.result = response;
      },
      error: (error: any) => {
        console.log("this was failed" + error);
      }
    })
  }

}

