import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {Pizza} from '../pizza'
import { PizzaService } from '../pizza.service';
import { isUndefined } from 'util';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pizza-form',
  templateUrl: './pizza-form.component.html',
  styleUrls: ['./pizza-form.component.css']
})
export class PizzaFormComponent implements OnInit {

  
  model1 = new  Pizza("1", "1", "", "Redonda", "Familiar", "salfa, ancohas");
  model: Pizza;
  sizes = ['Familiar', 'Grande', 'Mediana', 'Pequeña', 'Personal'];
  formas = ["Redonda", "Cuadrada", "Rectangular"];
  bloquearID: boolean;

constructor(private pizzaService: PizzaService){
};

/*MostrarInfo(){
  this.global.myGlobalVar = true;
  this.global.verForm = false;
 // this.list.getPizzas2();
}*/


submit(){
  alert("si entre jeje");
}

  ngOnInit() {
    //this.getPizzas();
   this.model = new Pizza("", "", "", "Redonda", "Grande", ""); 

  }


  
  
    /*getPizzas(): void {
      this.model = this.pizzaService.igualarPizzas();
    }*/
  

}
