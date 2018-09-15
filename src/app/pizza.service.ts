import { Injectable } from '@angular/core';

import {Pizza} from './pizza'
import {PIZZAS} from './mock-pizzas'

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  getPizzaList(): Pizza[] {
    return PIZZAS;
  }
  constructor() { }
}
