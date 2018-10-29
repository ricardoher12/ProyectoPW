import { Injectable, PLATFORM_INITIALIZER } from '@angular/core';
import { Pizza } from './pizza';

@Injectable()
export class GlobalProvider {

  public myGlobalVar: boolean;
  public verForm: boolean;
  public pizza: Pizza;
  public flag: boolean;

    constructor() { }

    ngOnInit() {
      this.myGlobalVar = true;
      this.verForm = false;
      this.pizza = new Pizza("", "", "", "","", "", "");
      this.flag = false;
    }
  }
  