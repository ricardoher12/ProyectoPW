import { Component } from '@angular/core';
import {Pizza} from './pizza';
import {PizzaService} from './pizza.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProyectoFront';
  PizzaInit = new Pizza("", "", "", "", "", "", "");
  
  crear() :void{
    let service = new PizzaService();
    service.igualarPizzas(new Pizza("", "", "", "Redonda", "Grande", "", "Si"));
  }
}
