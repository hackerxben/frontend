import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  submitted = false

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.submitted = true
    console.log(this.registerForm)
    /* console.log("testing button")
    console.log((this.registerForm))
    if(!this.registerForm.username){
      console.log("username is required")
    }
    if(!this.registerForm.email){
      console.log("email not found")
    } */
  }

}
