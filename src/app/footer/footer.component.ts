import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/users.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  testing = ""

  constructor(
    public userService:UserService
  ) { }

  ngOnInit(): void {
    this.testing = this.userService.test
  }

  changeValue(): void{
    this.userService.test = "A new value";
  }

}
