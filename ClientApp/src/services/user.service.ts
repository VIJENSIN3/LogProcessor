import { HttpClient } from '@angular/common/http';
import { AddUserRequest } from '../appmodels/adduser.model';
import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private httpClient: HttpClient) {

  }

  addUser(addCategoryrequest: AddUserRequest): Observable<string> {
    return this.httpClient.post<string>("https://localhost:7244/UserInfo", addCategoryrequest, {
      responseType: 'text' as 'json' // Handle string response
    });
  }

}
