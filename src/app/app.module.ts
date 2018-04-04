import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import { FormsModule } from '@angular/forms';
import { ApiService } from './api.service'; 
import { HttpClientModule } from '@angular/common/http'; 


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { MateriaComponent } from './materia/materia.component';
import { DetalhesComponent } from './detalhes/detalhes.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    MateriaComponent,
    DetalhesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }




