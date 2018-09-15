import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-separator',
  templateUrl: './separator.component.html',
  styleUrls: ['./separator.component.css']
})
export class SeparatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title: string = '¿Sabías que la pizza es considerada como la comida más popular y la más vendida del mundo?';
	icon: string = 'fa fa-4x fa-heart';
}
