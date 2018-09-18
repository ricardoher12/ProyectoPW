import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {Pizza} from '../pizza'
import { GlobalProvider } from "../GlobalProvide";
import { PizzaListComponent } from '../pizza-list/pizza-list.component';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pizza-form',
  templateUrl: './pizza-form.component.html',
  styleUrls: ['./pizza-form.component.css']
})
export class PizzaFormComponent implements OnInit {

  
  model1 = new  Pizza("1", "1", "", "Redonda", "Familiar", "salfa, ancohas");
  sizes = ['Familiar', 'Grande', 'Mediana', 'Pequeña', 'Personal'];
  formas = ["Redonda", "Cuadrada", "Rectangular"]
constructor(private rutaActiva: ActivatedRoute){};

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
