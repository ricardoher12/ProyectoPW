import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {Pizza} from '../pizza'
import { GlobalProvider } from "../GlobalProvide";
import {PizzaService} from '../pizza.service'

@Component({
  selector: 'app-pizza-form',
  templateUrl: './pizza-form.component.html',
  styleUrls: ['./pizza-form.component.css']
})
export class PizzaFormComponent implements OnInit {

  @Input() model: Pizza;
  @Input() flag: boolean;
  model1 = new  Pizza("1", "1", "", "Redonda", "Familiar", "salfa, ancohas");
  sizes = ['Familiar', 'Grande', 'Mediana', 'Pequeña', 'Personal'];
  formas = ["Redonda", "Cuadrada", "Rectangular"]
constructor(private global: GlobalProvider){};

MostrarInfo(){
  this.global.myGlobalVar = true;
  this.global.verForm = false;
}

  ngOnInit() {
    //this.getPizzas();

  }

  
    /*getPizzas(): void {
      this.model = this.pizzaService.igualarPizzas();
    }*/
  

}
