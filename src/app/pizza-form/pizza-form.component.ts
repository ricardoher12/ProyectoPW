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

  
  model1 = new  Pizza("1", "1", "", "Redonda", "Familiar", "salfa, ancohas");
  model: Pizza;
  sizes = ['Familiar', 'Grande', 'Mediana', 'Pequeña', 'Personal'];
  formas = ["Redonda", "Cuadrada", "Rectangular"];
  bloquearID: boolean;
  form: FormGroup;
constructor(private pizzaService: PizzaService, private formBuilder: FormBuilder, private router: Router){
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
  
  this.model.id = this.form.controls["id"].value;
  this.model.forma = this.form.controls["forma"].value;
  this.model.nombre = this.form.controls["nombre"].value;
  this.model.size = this.form.controls["size"].value;
  this.model.ingredientes = this.form.controls["ingredientes"].value;
  if(!this.pizzaService.crear(this.model))
  {
    alert("El id ingresado ya existe");
  }else{
    this.router.navigate([('../catalogo')]);
  }
}

regresar(){
  this.router.navigate([('../home')]);
}

  ngOnInit() {
    //this.getPizzas();
    this.form = this.formBuilder.group({
      nombre: [
        '', 
        [ Validators.required, Validators.maxLength(20) ]
      ],
      id: [
        '',
      [Validators.required, Validators.maxLength(3), Validators.pattern("[0-9]*"), Validators.minLength(1) ] 
      ],
      ingredientes: [
        '', 
        [ Validators.required, Validators.minLength(1), Validators.maxLength(90) ]
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
    this.model = new Pizza("", "", "", "", "", "");
  }


  
  
    /*getPizzas(): void {
      this.model = this.pizzaService.igualarPizzas();
    }*/
  

}
