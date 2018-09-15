import { Component, OnInit } from '@angular/core';
import {PizzaService } from '../pizza.service'
import {Pizza} from '../pizza'
import { GlobalProvider } from "../GlobalProvide";


@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {
  pizzas: Pizza[];
  constructor(private pizzaService: PizzaService, private global: GlobalProvider) { }

  ngOnInit() {
    this.getPizzas();
  }
  getPizzas(): void {
    this.pizzas = this.pizzaService.getPizzaList();
  }

}
