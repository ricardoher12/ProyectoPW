import { Component, OnInit, ViewChild, ViewContainerRef, ComponentRef  } from '@angular/core';
import {PizzaService } from '../pizza.service'
import {Pizza} from '../pizza'
import { ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import { Router } from "@angular/router";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormalModalComponent } from '../formal-modal/formal-modal.component';


@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {
  pizzas:{ [id:string] : Pizza} = {};
  keys : string[] = [];

  constructor(private pizzaService: PizzaService, private modalDialogService: ModalDialogService, private viewContainer: ViewContainerRef, private router: Router, private modalService: NgbModal) 
  {
    this.pizzaService.modificarFlag = false;
     }

  ngOnInit() {
    this.pizzaService.modificarFlag = false;
    this.getPizzas();
  }
  
getPizzas2(): void{
  //this.pizzas = this.pizzaService.get2Pizzas();
}


   getPizzas(): void {
    this.pizzas = this.pizzaService.getPizzaList();
    this.keys = Object.keys(this.pizzas);
  }

 /* MostrarEdit(pizza: Pizza){
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
  }*/

  Modificar(pizza: Pizza)
  {
    this.pizzaService.igualarPizzas(pizza);
    this.pizzaService.modificarFlag = true;
    this.router.navigate([('../modificar')]);
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
          text: 'Eliminar',
          buttonClass: 'btn btn-danger',
          onAction: () => new Promise((resolve: any) => {
            setTimeout(() => {
              resolve(this.pizzaService.eliminar(pizza), this.getPizzas());
            }, 20);
          })
        },
        {
          text: 'Cerrar',
          buttonClass: 'btn btn-primary',
          onAction: () => new Promise((resolve: any) => {
            setTimeout(() => {
              resolve();
            }, 20);
          })
        }
      ]
    });
  }

borrarPizza(id: string){
alert(id);

}

  openFormModal(pizza: Pizza) {
    this.pizzaService.pizzaModel = pizza;
    const modalRef = this.modalService.open(FormalModalComponent);
    
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

}

