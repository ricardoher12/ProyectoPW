import { Component, OnInit } from '@angular/core';
import { Pizza } from '../pizza';
import {PizzaService} from '../pizza.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  
  constructor(private pizzaService: PizzaService, private router: Router) { this.pizzaService.modificarFlag = false; }

  ngOnInit() {
    //this.pizzaService.grabar_localmente();
  }

  Crear(): void{
    let pizza = new Pizza("", "", "", "Redonda", "Grande", "", "Si");
    this.pizzaService.igualarPizzas(pizza);
    this.router.navigate([('../crear')]);
  }

}
