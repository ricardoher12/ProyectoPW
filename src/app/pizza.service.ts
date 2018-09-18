import { Injectable } from '@angular/core';


import {Pizza} from './pizza'
import {PIZZAS} from './mock-pizzas'
import { GlobalProvider} from './GlobalProvide';
import {PIZZAS2} from './mock-pizzas2'

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  getPizzaList(): Pizza[] {
    let listPiz: Pizza[]= JSON.parse(localStorage.getItem("pizzas").toString());
  return PIZZAS;
  }

  get2Pizzas(): Pizza[]
  {
    return PIZZAS2;
  }

  grabar_localmente() :void {
    localStorage.setItem("pizzas", JSON.stringify(PIZZAS));
  }

  public igualarPizzas(): Pizza
  {
    return this.global.pizza;
  }
  constructor(private global:GlobalProvider) { }
}
