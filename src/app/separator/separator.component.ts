import { Component, OnInit } from '@angular/core';
import { GlobalProvider } from "../GlobalProvide";
import { PizzaService } from '../pizza.service';
import { BrowserViewportScroller } from '@angular/common/src/viewport_scroller';

@Component({
  selector: 'app-separator',
  templateUrl: './separator.component.html',
  styleUrls: ['./separator.component.css']
})
export class SeparatorComponent implements OnInit {
 flag: boolean = true;
  constructor(private global: GlobalProvider, private pizzaService: PizzaService) { 
    this.flag = pizzaService.mostrarSeparador;
    
  }

  ngOnInit() {
    this.ocultarVentana(false);
  }
  title: string = '¿Sabías que la pizza es considerada como la comida más popular y la más vendida del mundo?';
  icon: string = 'fa fa-4x fa-heart';
  
  ocultarVentana(flag: boolean) :void{
    var div = document.getElementById('separator');
    if(flag){
      this.pizzaService.mostrarSeparador = true;
    }
    this.flag = this.pizzaService.mostrarSeparador;
    div.hidden = this.flag;    
    
  };
}
