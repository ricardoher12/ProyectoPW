import { Injectable } from '@angular/core';

@Injectable()
export class GlobalProvider {

  public myGlobalVar: boolean;


    constructor() { }

    ngOnInit() {
      this.myGlobalVar = true;
    }
  }
  