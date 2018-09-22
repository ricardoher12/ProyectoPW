import { Component, OnInit } from '@angular/core';
import {Pizza} from '../pizza'
import { PizzaService } from '../pizza.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { DISABLED } from '@angular/forms/src/model';

@Component({
  selector: 'app-pizza-form-mod',
  templateUrl: './pizza-form-mod.component.html',
  styleUrls: ['./pizza-form-mod.component.css']
})
export class PizzaFormModComponent implements OnInit {
  sizes = ['Familiar', 'Grande', 'Mediana', 'Pequeña', 'Personal'];
  formas = ["Redonda", "Cuadrada", "Rectangular"];
  model: Pizza;
  form: FormGroup;

  constructor(private pizzaService: PizzaService, private router: Router,  private formBuilder: FormBuilder) { this.model = this.pizzaService.pizzaModel}

  ngOnInit() {
    this.form = this.formBuilder.group({
      nombre: [
        this.model.nombre,
        
        [ Validators.required, Validators.maxLength(20) ], 
      ],
      id: [
        this.model.id,
      [Validators.required, Validators.maxLength(3), Validators.pattern("[0-9]*"), Validators.minLength(1) ] 
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

    this.form.controls['id'].disable();
 
  }
  regresar(){
    this.router.navigate([('../catalogo')]);
  }

  submit()
  {
    this.model.forma = this.form.controls["forma"].value;
    this.model.nombre = this.form.controls["nombre"].value;
    this.model.size = this.form.controls["size"].value;
    this.model.ingredientes = this.form.controls["ingredientes"].value;
    this.pizzaService.modificar(this.model);
    this.regresar();
  }

}
