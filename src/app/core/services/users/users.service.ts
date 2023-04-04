import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { User } from '../../models/users/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private formSubmittedData: User;
  constructor() {}


  createUser(user:User){
    this.formSubmittedData = user;
  }

  getSavedUser(){
    return of(this.formSubmittedData);
  }
}
