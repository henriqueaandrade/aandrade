import { Component, OnInit } from '@angular/core';
import { ApiService} from '../api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ApiService]
})
export class LoginComponent implements OnInit {
  usuario = {
    username: "email",
    password: "senha"
    };
    mensagens = '';
    
  constructor(
      public api: ApiService) { 
          
      }
  ngOnInit() {
  }
 
 
verificaLogin(){
    this.api.autenticaUser(
              this.usuario.username,
          this.usuario.password).subscribe( retorno => {
        if(retorno['token']){
            this.logar();
        }else{
             this.mensagens = 'Deu ruim';
        }

    })
}

 logar(){
    localStorage.setItem("assessment", 
    JSON.stringify(this.usuario));
}




 deslogar(){
    localStorage.removeItem("assessment");
    
    
    
}
 verificaLogado(){
    let temporaria = localStorage.getItem("assessment");
    if(temporaria.length > 0){
        document.getElementById("status")
        .innerHTML = "Logado como "+ 
        JSON.parse(temporaria).nome;
    }
}




    


}
