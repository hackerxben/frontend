import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from '../models/loginRequest.model';
import { UserService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit , OnDestroy{

  loginForm!: FormGroup
  id=5
  emailControlHasErrors = true
  isNotValidEmail = false

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.loginForm = this.fb.group(
      {
        email:["",[Validators.required,Validators.email]],
        password:["",[Validators.required]],
        rememberMe:[""]
      }
    )
  }

  ngOnInit(): void {
    /* if(this.loginForm.get('email')!.errors){
      this.emailControlHasErrors = true
    } */

    this.emailControlHasErrors = this.loginForm.get('email')!.errors !== null
    
    this.isNotValidEmail = this.loginForm.get('email')!.errors!.email && (this.loginForm.get('email')!.touched || this.loginForm.get('email')!.dirty )
  }

  onSubmit(): void{
    console.log("email: "+this.loginForm.get("email")!.value)
    console.log("password: "+this.loginForm.get("password")!.value)
    console.log("rememberMe: "+this.loginForm.get("rememberMe")!.value)

    console.log("form: "+JSON.stringify(this.loginForm.value))
    let loginRequest = new LoginRequest()
    loginRequest.username = this.loginForm.get("email")!.value
    loginRequest.password = this.loginForm.get("password")!.value
    this.userService.signIn(loginRequest).subscribe(
      (response) => console.log(response),
      (error) => console.log(error.message)
    )
  }

  ngOnDestroy(): void {
    console.log("Component login was destroyed")
  }

  navigate(): void{
    this.router.navigateByUrl("/home")
  }

}
