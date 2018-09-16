import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs'

import {Pizza} from './pizza'
import {PIZZAS} from './mock-pizzas'
import { GlobalProvider} from './GlobalProvide';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  getPizzaList(): Pizza[] {
    return PIZZAS;
  }

  public igualarPizzas(): Pizza
  {
    return this.global.pizza;
  }
  constructor(private global:GlobalProvider) { }
}
