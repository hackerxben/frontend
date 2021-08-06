import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: User[] = []
  newUser = new User()
  oldUser = new User()
  userIdDisabled = true
  updateForm: FormGroup

  constructor(
    private fb: FormBuilder
  ) {
    this.updateForm = this.fb.group(
      {
        //userId:[{value: '', disabled: true}],
        userId: [],
        username: [],
        email: [],
        firstName: [],
        lastName: [],
        age: []
      }
    )
    this.users.push({
      userId: 125,
      username: "test1",
      email: "test1@test.com",
      firstName: "Test1",
      lastName: "Testing1",
      age: 20,
      role: 'ADMIN'
    })
    let user = new User()
    user.userId = 147
    user.username = "test2"
    user.email = "test2@test.com"
    user.firstName = "Test2"
    user.lastName = "Testing2"
    user.age = 20
    this.users.push(user)
    this.newUser = user
    this.oldUser = user
    this.updateForm.get("userId")!.disable()
  }

  ngOnInit(): void {
    let admin = this.users.filter(
      e => e.role === "ADMIN"
    )
    let normalUser = this.users.filter(
      e => e.role !== "ADMIN"
    )
  }

  deleteRow(userId: number) {
    this.users = this.users.filter(
      e => e.userId != userId
    )
  }

  update(user: User) {
    this.updateForm.patchValue({
      userId: user.userId,
      username: user.username,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      age: user.age
    })
  }

  editUser() {
    let user = new User()
    user.userId = this.updateForm.get('userId')!.value
    user.username = this.updateForm.get('username')!.value
    user.email = this.updateForm.get('email')!.value
    user.firstName = this.updateForm.get('firstName')!.value
    user.lastName = this.updateForm.get('lastName')!.value
    user.age = this.updateForm.get('age')!.value

    /* this.users = this.users.filter(
      e => e.userId !== user.userId
    )
    this.users.push(user) */

    this.users = this.users.map(obj =>
      obj.userId === user.userId ? user : obj
    );
  }

}
