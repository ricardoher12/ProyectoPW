import { Component, OnInit } from '@angular/core';
import { GlobalProvider } from "../GlobalProvide";

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
 
   
  constructor(private global: GlobalProvider) { 
    this.global.myGlobalVar = true;
    this.global.verForm = false;
  }

  ngOnInit() {
    
    
  }

  


}


