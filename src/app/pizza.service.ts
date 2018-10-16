import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs'

import {Pizza} from './pizza'
import {PIZZAS} from './mock-pizzas'
import { GlobalProvider} from './GlobalProvide';
import {PIZZAS2} from './mock-pizzas2'
import { isUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
pizzaModel = new Pizza("", "", "", "Redonda", "Grande", "", "Si" );
pizzaList: { [id:string] : Pizza} = {};
flag = "";
modificarFlag : boolean = false;
mostrarSeparador: boolean = false;


igualarPizzas(pizza: Pizza)
{
  this.pizzaModel = pizza;
}

  getPizzaList(): {} {
    try {
      this.pizzaList = JSON.parse(localStorage.getItem("pizzas").toString());
      return this.pizzaList;
    } catch (error) {
      return this.pizzaList;
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

  crear(pizza: Pizza): boolean{
    try {
     /*this.pizzaList = this.getPizzaList();
      let existe = this.pizzaList[pizza.id];*/
      //if(isUndefined(existe)){
        pizza.id = this.newGuid();
        this.pizzaList[pizza.id] = pizza;
        localStorage.setItem("pizzas", JSON.stringify(this.pizzaList));
        return true;
      //}else{
        //return false;
      //}
      
    } catch (error) {
     return false; 
    }
  }


  eliminar(pizza: Pizza): boolean
  {
   delete this.pizzaList[pizza.id];
    localStorage.setItem("pizzas", JSON.stringify(this.pizzaList));
    return true;
  }

  modificar(pizza: Pizza): boolean{
    try {
      this.pizzaList[pizza.id] = pizza;
    localStorage.setItem("pizzas", JSON.stringify(this.pizzaList));
      return true;
    } catch (error) {
      return false;
    }
    

  }

   newGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0, v = c === 'x' ? r : ( r & 0x3 | 0x8 );
        return v.toString(16);
    });
}
  constructor() { }
}
