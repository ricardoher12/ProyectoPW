import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { SeparatorComponent } from './separator/separator.component';
import { UiModule } from './ui/ui.module';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import {GlobalProvider} from './GlobalProvide';
import { PizzaFormComponent } from './pizza-form/pizza-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalDialogModule } from 'ngx-modal-dialog';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    SeparatorComponent,
    PizzaListComponent,
    PizzaFormComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    UiModule,
    FormsModule,
    ReactiveFormsModule,
    ModalDialogModule.forRoot()
  ],
  providers: [GlobalProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
