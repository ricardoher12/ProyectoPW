import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { SeparatorComponent } from './separator/separator.component';
import { UiModule } from './ui/ui.module';
import { PizzaListComponent } from './pizza-list/pizza-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    SeparatorComponent,
    PizzaListComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
