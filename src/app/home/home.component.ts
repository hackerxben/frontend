import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  testValue = ""

  users: User[] = []

  constructor(
    public userService: UserService
  ) { }

  ngOnInit(): void {
    this.testValue = this.userService.test
    this.userService.getUsers().subscribe(
      (response) => this.users = response
    )
  }

  showDeployments(): void{
    document.getElementById("deployments")!.classList.remove("hidden")
    this.userService.getUser().subscribe(
      (response) => console.log(response)
    )
    // document.getElementById("deployments")!.setAttribute("style","display: block")
  }

  
  showApplications(): void{
    document.getElementById("applications")!.classList.remove("hidden")
  }
  hideApplications(): void{
    document.getElementById("applications")!.classList.add("hidden")
  }

  ngOnDestroy(): void {
    console.log("Component Home was destroyed")
  }

}
