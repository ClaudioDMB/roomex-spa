import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { User } from "../../models/users/user.model";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  private formSubmittedData: User;
  constructor() {}

  createUser(user: User): void {
    this.formSubmittedData = user;
  }

  getSavedUser(): Observable<User> {
    return of(this.formSubmittedData);
  }
}
