import { Component, OnInit } from '@angular/core';
import { AddUserRequest } from '../../appmodels/adduser.model';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  model: AddUserRequest;
  message!: string;
  result!: string;

  constructor(private userService: UserService, private router: Router) {
    this.model = {
      name: '',
      address: ''
    };
  }

  ngOnInit() {
    // You can initialize anything if needed here
  }

  AddUser(form: any) {
    // Ensure form is valid before submitting
    if (form.valid) {
      this.userService.addUser(this.model).subscribe({
        next: (response: any) => {
          this.result = response;
          // Optionally, navigate to a different route or reset the form
          // this.router.navigate(['/some-route']); 
        },
        error: (error: any) => {
          console.error("Error occurred while adding user: ", error);
          this.message = "Failed to add user. Please try again."; // Optional message for user feedback
        }
      });
    } else {
      this.message = "Please fill in the required fields.";
    }
  }
}
