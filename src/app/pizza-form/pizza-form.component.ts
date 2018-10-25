import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {Pizza} from '../pizza'
import { PizzaService } from '../pizza.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';

@Component({
  selector: 'app-pizza-form',
  templateUrl: './pizza-form.component.html',
  styleUrls: ['./pizza-form.component.css']
})
export class PizzaFormComponent implements OnInit {

  
  model1 = new  Pizza("1", "1", "", "Redonda", "Familiar", "salfa, ancohas", "Si");
  model : Pizza;
  sizes = ['Familiar', 'Grande', 'Mediana', 'Pequeña', 'Personal'];
  formas = ["Redonda", "Cuadrada", "Rectangular"];
  orillaQueso= ["Si", "No"];
  bloquearID: boolean;
  form: FormGroup;
  title : string = ""
constructor(private pizzaService: PizzaService, private formBuilder: FormBuilder, private router: Router, private modalDialogService: ModalDialogService, private viewContainer: ViewContainerRef){
  if(this.router.url.includes("modificar"))
  {
    if(this.pizzaService.pizzaModel._id == "")
    {
      this.router.navigate([('../catalogo')]);
    }
    else{
      this.model = this.pizzaService.pizzaModel;
    }
    
  }
  else{
    this.pizzaService.modificarFlag = false;
  }
 
};

/*MostrarInfo(){
  this.global.myGlobalVar = true;
  this.global.verForm = false;
 // this.list.getPizzas2();
}*/
 getFullName(item, index) {
  return item.value;
}

submit(){
  if(!this.pizzaService.modificarFlag)
  {
  //this.model.id = this.form.controls["id"].value;
  this.model.forma = this.form.controls["forma"].value;
  this.model.nombre = this.form.controls["nombre"].value;
  this.model.size = this.form.controls["size"].value;
  this.model.ingredientes = this.form.controls["ingredientes"].value;
  this.model.orilla = this.form.controls["orilla"].value;
  this.form.disable();
  document.getElementById("form").hidden = true;
  document.getElementById("loading").hidden = false;
  this.pizzaService.crear(this.model)
    .then(data => {
      this.router.navigate([('../catalogo')]);
    })
    .catch(error =>{
      this.title = error;
      document.getElementById("errorMessage").hidden = false;
      this.form.enable();
      document.getElementById("form").hidden = false;
  document.getElementById("loading").hidden = true;
    });
  }
  else{
    document.getElementById("form").hidden = true;
    document.getElementById("loading").hidden = false;
    this.model.forma = this.form.controls["forma"].value;
    this.model.nombre = this.form.controls["nombre"].value;
    this.model.size = this.form.controls["size"].value;
    this.model.ingredientes = this.form.controls["ingredientes"].value;
    this.model.orilla = this.form.controls["orilla"].value;
    
    /*if(!this.pizzaService.modificar(this.model))
    {
      alert("Error al modificar receta");
    }
    else{
      this.regresarMod();
    }*/
    this.pizzaService.modificar(this.model)
    .then(data => {
      this.router.navigate([('../catalogo')]);
    })
    .catch(error =>{
     /* this.title = error;
      document.getElementById("errorMessage").hidden = false;*/
      document.getElementById("form").hidden = true;
      document.getElementById("loading").hidden = false;
      this.form.enable();
      this.openErrorModal(error);
    });
    
  }
  
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
            resolve(this.router.navigate([('../catalogo')]));
          }, 20);
        })
      }
    ]
  });
}

ocultarVentana(){
  document.getElementById("errorMessage").hidden = true;
}

regresarMod(){
  this.router.navigate([('../catalogo')]);
}

regresar(){
  this.router.navigate([('../home')]);
}

  ngOnInit() {
    //this.getPizzas();
    if(!this.pizzaService.modificarFlag)
   {
    this.form = this.formBuilder.group({
      nombre: [
        '', 
        [ Validators.required, Validators.maxLength(20) ]
      ],
     /* id: [
        '',
      [Validators.required, Validators.maxLength(3), Validators.pattern("[0-9]*"), Validators.minLength(1) ] 
      ],*/
      ingredientes: [
        '', 
        [ Validators.required, Validators.minLength(1), Validators.maxLength(90) ]
      ],
      orilla:[
        'Si',
        Validators.required
      ],
      forma: [
        'Redonda',
        Validators.required

      ],
      size:[
        'Grande',
        Validators.required
      ]
    });
    this.model = new Pizza("", "", "", "", "", "", "");
   }
    else{

      this.form = this.formBuilder.group({
        nombre: [
          this.model.nombre,
          
          [ Validators.required, Validators.maxLength(20) ], 
        ],
       /* id: [
          this.model.id,
        [Validators.required, Validators.maxLength(3), Validators.pattern("[0-9]*"), Validators.minLength(1) ] 
        ],*/
        orilla: [
          this.model.orilla,
          Validators.required
        ],
        ingredientes: [
          this.model.ingredientes, 
          [ Validators.required, Validators.minLength(1), Validators.maxLength(90) ]
        ],
        forma: [
          this.model.forma,
          Validators.required
  
        ],
        size:[
          this.model.size,
          Validators.required
        ]
      });
  
      //this.form.controls['id'].disable();
   
    }
  }


  
  
    /*getPizzas(): void {
      this.model = this.pizzaService.igualarPizzas();
    }*/
  

}
