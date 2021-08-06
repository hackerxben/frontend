import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  currentComponent = '';

  changeColor="color: red";

  longeur = "100"

  constructor (
  ) {
  }

  ngOnInit(): void {
    console.log("current url:"+location.href);
    if(location.href.includes("/login")){
      this.currentComponent = "Login Component"
      this.changeColor = "color: blue"
    }else if(location.href.includes("/register")){
      this.currentComponent = "Rgeister Component"
      this.changeColor = "color: green"
    }else{
      this.currentComponent = "Home Component"
      this.changeColor = "color: purple"
    }
  }

  

}
