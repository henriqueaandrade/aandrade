import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Materia } from './pojo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ApiService]
})
export class AppComponent {
  
  materia: any ;
  detalhes: Materia;
  
  constructor(
    public apiDetalhes: ApiService 
    ) {
      this.apiDetalhes.pegaDados().subscribe( dados => {
        this.materia = dados;
      }); 
  
    }
    exibeDetalhes() {
      console.log('materia selecionada');
    }
 
    }



