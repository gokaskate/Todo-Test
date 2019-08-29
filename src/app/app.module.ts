import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//angular material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {  } from '@angular/material';

//services
import { TodoServiceService } from './services/todo-service.service';

import { MomentModule } from 'angular2-moment';

import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { NavbarComponent } from './components/shared/navbar.component';
import { ReactiveFormsModule } from '../../node_modules/@angular/forms';
import { HttpClientModule } from '../../node_modules/@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    //mis imports
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MomentModule
  ],
  providers: [
    TodoServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
