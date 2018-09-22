import { Component, OnInit } from '@angular/core';
import {Pizza} from '../pizza'
import { PizzaService } from '../pizza.service';
import { isUndefined } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pizza-form-mod',
  templateUrl: './pizza-form-mod.component.html',
  styleUrls: ['./pizza-form-mod.component.css']
})
export class PizzaFormModComponent implements OnInit {
  sizes = ['Familiar', 'Grande', 'Mediana', 'Pequeña', 'Personal'];
  formas = ["Redonda", "Cuadrada", "Rectangular"];
  model: Pizza;
  constructor(private pizzaService: PizzaService, private router: Router) { this.model = this.pizzaService.pizzaModel}

  ngOnInit() {
  }
  regresar(){
    this.router.navigate([('../catalogo')]);
  }

  submit()
  {
    this.pizzaService.modificar(this.model);
  }

}
