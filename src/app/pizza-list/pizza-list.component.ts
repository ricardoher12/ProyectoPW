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
  pizzas:{ } = {};
  keys : string[] = [];
  title : string = "";
  title2 : string = "";
  


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
     var loading = document.getElementById("loading");
     var lista = document.getElementById("pizzaList");
     loading.hidden = false;
     lista.hidden = true;
     this.pizzas = {};
    this.pizzaService.getPizzaList().then( data =>{
      loading.hidden = true;
     lista.hidden = false;
      //this.pizzas =data;
      this.pizzas = data;
      this.keys = Object.keys(this.pizzas);
    /*if(this.keys.length == 0){
      document.getElementById('emptyMessage').hidden = false;
    }*/
    }

    ).catch(error => {
      loading.hidden = true;
     lista.hidden = false;
     this.keys = [];
      if(error == "No items found"){
        document.getElementById('emptyMessage').hidden = false;
      }
      else{
        var message = document.getElementById('errorMessage');
        this.title = "Error al obtener pizzas: " +error;
        message.hidden = false;
       
      }
     
    });
    
  }

  ocultarVentana(flag : boolean){
    if(flag)
    {
      document.getElementById("errorMessage").hidden = true;
    }else{
      document.getElementById("eraseMessage").hidden = true;
    }
    
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
    var nombre = pizza.nombre;
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
    var nombre = pizza.nombre;
    var message = '¿Estas seguro de querer eliminar la pizza ';
    message = message.concat(pizza.nombre);
    message = message.concat(" ?");
    this.modalDialogService.openDialog(this.viewContainer, {
      title: 'Eliminar Pizza',
      childComponent: SimpleModalComponent,
      data: {
        text: message  
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
              resolve(this.pizzaService.eliminar(pizza).then(data =>{
                console.log(data);
                this.title2 = "Se borro exitosmente la pizza: " + nombre;
                this.MostrarExito(true)

              })
              .catch(error => {
                console.log(error);
                //this.title = error;
                //document.getElementById("errorMessage").hidden = false;
                //this.openErrorModal(error);
                this.title2 = "Error al borrar la pizza: " + nombre + " " + error;
                this.MostrarExito(false)

               // message.hidden = false;
              }), this.getPizzas() );
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

  openErrorModal(message: string) {
    this.modalDialogService.openDialog(this.viewContainer, {
      title: 'Mensaje de Error',
      childComponent: SimpleModalComponent,
      data: {
        text: message  
      },
      settings: {
        closeButtonClass: 'close theme-icon-close'
      },
      actionButtons: [
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

ocultarSuccess(){
  var message = document.getElementById('successMessage');
      message.hidden = true;
}

  MostrarExito(flag : boolean)
  {
    if(flag){
      var message = document.getElementById('successMessage');
      message.hidden = false;

    }else{
      var message = document.getElementById('eraseMessage');
      message.hidden = false;
    }
    
  }

  openSuccessModal(message: string) {
    this.modalDialogService.openDialog(this.viewContainer, {
      title: 'Eliminación exitosa',
      childComponent: SimpleModalComponent,
      data: {
        text: "La pizza " + message + " se ha elimiando exitosamente"  
      },
      settings: {
        closeButtonClass: 'close theme-icon-close'
      },
      actionButtons: [
        {
          text: 'Cerrar',
          buttonClass: 'btn btn-primary',
          onAction: () => new Promise((resolve: any) => {
            setTimeout(() => {
              resolve(this.keys= [], this.getPizzas());
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

