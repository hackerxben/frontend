import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-deployments',
  templateUrl: './deployments.component.html',
  styleUrls: ['./deployments.component.css']
})
export class DeploymentsComponent implements OnInit , OnDestroy{

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    console.log("Component Deployments was destroyed")
  }

}
