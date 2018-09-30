import { Component, OnInit } from '@angular/core';
import {Pizza} from '../pizza'
import { PizzaService } from '../pizza.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
constructor(private pizzaService: PizzaService, private formBuilder: FormBuilder, private router: Router){
  if(this.router.url.includes("modificar"))
  {
    if(this.pizzaService.pizzaModel.id == "")
    {
      this.router.navigate([('../catalogo')]);
    }
    else{
      this.model = this.pizzaService.pizzaModel;
    }
    
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
    if(!this.pizzaService.crear(this.model))
    {
      alert("El id ingresado ya existe");
    }else{
      this.router.navigate([('../catalogo')]);
    }
  }
  else{
    this.model.forma = this.form.controls["forma"].value;
    this.model.nombre = this.form.controls["nombre"].value;
    this.model.size = this.form.controls["size"].value;
    this.model.ingredientes = this.form.controls["ingredientes"].value;
    this.model.orilla = this.form.controls["orilla"].value;
    
    if(!this.pizzaService.modificar(this.model))
    {
      alert("Error al modificar receta");
    }
    else{
      this.regresarMod();
    }
    
  }
  
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
