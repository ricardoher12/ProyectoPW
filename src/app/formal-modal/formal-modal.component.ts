import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
import { Pizza } from '../pizza';
import {PizzaService } from '../pizza.service'

@Component({
  selector: 'app-formal-modal',
  templateUrl: './formal-modal.component.html',
  styleUrls: ['./formal-modal.component.css']
})

export class FormalModalComponent implements OnInit {
  myForm: FormGroup;
  constructor(public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder, public pizzaService: PizzaService) { 
      this.createForm();
    }
    sizes = ['Familiar', 'Grande', 'Mediana', 'Pequeña', 'Personal'];
    formas = ["Redonda", "Cuadrada", "Rectangular"];

    private createForm() {
      this.myForm = this.formBuilder.group({
        id: this.pizzaService.pizzaModel._id,
        nombre: this.pizzaService.pizzaModel.nombre,
        size: this.pizzaService.pizzaModel.size,
        forma: this.pizzaService.pizzaModel.forma,
        ingredientes: this.pizzaService.pizzaModel.ingredientes

        
      });
    }

    cerrar()
    {
      this.activeModal.close(this.myForm.value);
    }
  ngOnInit() {
  }

}
