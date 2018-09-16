import { Component, OnInit } from '@angular/core';
 import { GlobalProvider } from "../../GlobalProvide";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private global: GlobalProvider) { }

  ngOnInit() {
  }

  MostarHome():void{
    this.global.myGlobalVar = true;
    this.global.verForm = false;
  }

  MostarForm():void{
    this.global.myGlobalVar = false;
    this.global.verForm = true;
  }

}
