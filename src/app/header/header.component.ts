import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username = ""

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUser()
    console.log("IT should be sent now")
  }

}
