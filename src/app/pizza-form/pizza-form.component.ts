import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {Pizza} from '../pizza'
import { GlobalProvider } from "../GlobalProvide";
import { PizzaListComponent } from '../pizza-list/pizza-list.component';
import { ActivatedRoute, Params } from '@angular/router';
import { PizzaService } from '../pizza.service';
import { isUndefined } from 'util';
import { PIZZAS } from '../mock-pizzas';

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
 if(isUndefined(this.pizzaService.pizzaModel))
 {
  this.model = new Pizza("", "", "", "Redonda", "Grande", "");
 }else{
  this.model = this.pizzaService.pizzaModel;
  if(this.model.id != ""){
    this.bloquearID = false;
  }else
  {
    this.bloquearID = true;
  }
 }
  
};

/*MostrarInfo(){
  this.global.myGlobalVar = true;
  this.global.verForm = false;
 // this.list.getPizzas2();
}*/


submit(){
  
}

  ngOnInit() {
    //this.getPizzas();
    

  }

  
    /*getPizzas(): void {
      this.model = this.pizzaService.igualarPizzas();
    }*/
  

}
