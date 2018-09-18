import { Component, OnInit, ViewChild, ViewContainerRef, ComponentRef  } from '@angular/core';
import {PizzaService } from '../pizza.service'
import {Pizza} from '../pizza'
import { GlobalProvider } from "../GlobalProvide";
import { ModalDialogService, SimpleModalComponent, IModalDialog, IModalDialogButton, IModalDialogOptions } from 'ngx-modal-dialog';
import { Router } from "@angular/router";



@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {
  pizzas: Pizza[];
  

  constructor(private pizzaService: PizzaService, private global: GlobalProvider, private modalDialogService: ModalDialogService, private viewContainer: ViewContainerRef, private router: Router) {this.global.myGlobalVar = true;
    this.global.verForm = false; }

  ngOnInit() {
    this.pizzaService.grabar_localmente();
    this.getPizzas();
  }
  
getPizzas2(): void{
  this.pizzas = this.pizzaService.get2Pizzas();
}


   getPizzas(): void {
    this.pizzas = this.pizzaService.getPizzaList();
  }

  MostrarEdit(pizza: Pizza){
    this.global.myGlobalVar = false;
    this.global.verForm = true;
    this.global.pizza = pizza;
    this.global.flag = false;
  }

  CrearReceta() :void{
    this.global.flag = true;
    this.global.verForm = true;
    this.global.pizza = new Pizza("", "", "", "", "", "");
    this.global.myGlobalVar =false;
  }

  Modificar()
  {
    this.router.navigateByUrl('/modificar');
  }
  
  openEditModal(pizza: Pizza) {
    this.modalDialogService.openDialog(this.viewContainer, {
      title: 'Confirmación de Eliminacion',
      childComponent: SimpleModalComponent,
      data: {
        text: 'Confirme si desea borra el elemento seleccionado',
        input: "nombre"
      },
      settings: {
        closeButtonClass: 'close theme-icon-close'
      },
      actionButtons: [
        {
          text: 'Cerrar',
          buttonClass: 'btn btn-success',
          onAction: () => new Promise((resolve: any) => {
            setTimeout(() => {
              resolve();
            }, 20);
          })
        },
        {
          text: 'Eliminar',
          buttonClass: 'btn btn-danger',
          onAction: () => new Promise((resolve: any, reject: any) => {
            setTimeout(() => {
              resolve();
            }, 20);
          })
        }
      ]
    });
  }


  openPromptModal(pizza: Pizza) {
    this.modalDialogService.openDialog(this.viewContainer, {
      title: 'Confirmación de Eliminacion',
      childComponent: SimpleModalComponent,
      data: {
        text: 'Confirme si desea borra el elemento seleccionado'
      },
      settings: {
        closeButtonClass: 'close theme-icon-close'
      },
      actionButtons: [
        {
          text: 'Cerrar',
          buttonClass: 'btn btn-success',
          onAction: () => new Promise((resolve: any) => {
            setTimeout(() => {
              resolve();
            }, 20);
          })
        },
        {
          text: 'Eliminar',
          buttonClass: 'btn btn-danger',
          onAction: () => new Promise((resolve: any, reject: any) => {
            setTimeout(() => {
              resolve();
            }, 20);
          })
        }
      ]
    });
  }

}

