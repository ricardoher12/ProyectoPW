import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs'

import {Pizza} from './pizza'
import {PIZZAS} from './mock-pizzas'
import { GlobalProvider} from './GlobalProvide';
import {PIZZAS2} from './mock-pizzas2'

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
pizzaModel = new Pizza("", "", "", "Redonda", "Grande", "" );
pizzaList: Pizza[] = [];
flag = "";

igualarPizzas(pizza: Pizza)
{
  this.pizzaModel = pizza;
}

  getPizzaList(): Pizza[] {
    try {
      this.pizzaList = JSON.parse(localStorage.getItem("pizzas").toString());
      return this.pizzaList;
    } catch (error) {
      return PIZZAS;
    }
    
  }

  get2Pizzas(): Pizza[]
  {
    return PIZZAS2;
  }

  grabar_localmente() :void {
    localStorage.setItem("pizzas", JSON.stringify(PIZZAS));
    
  }

  /*public igualarPizzas(): Pizza
  {
    //return this.global.pizza;
  }*/

  crear(pizza: Pizza){
    this.pizzaList.push(pizza);
    localStorage.setItem("pizzas", JSON.stringify(this.pizzaList));
  }

  modificar(pizza: Pizza){
    this.pizzaList = JSON.parse(localStorage.getItem("pizzas").toString());
    for(let pizz of this.pizzaList){
      if(pizz.id == pizza.id)
      {
        pizz.forma = pizza.forma;
        pizz.ingredientes = pizza.ingredientes;
        pizz.nombre = pizza.nombre;
        pizz.size = pizza.size;
        break;
      }
    }

    localStorage.setItem("pizzas", JSON.stringify(this.pizzaList));

  }
  constructor() { }
}
