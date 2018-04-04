import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export const URLAPI = 'https://lms.infnet.edu.br/moodle/login/token.php:'

@Injectable () 
export class urlApiService {
   cabecalho = {
       wstoken: ''
   }
    public urlAPIAuth = 'https://lms.infnet.edu.br/moodle/login/token.php';
    public urlAPIDados = 'https://lms.infnet.edu.br/moodle/webservice/rest/server.php';

    
    constructor(
        public api: HttpClient
        ){
            
        }
   
    pegaDados (){
        return this.api.get(this.urlAPIAuth, {
            headers: this.cabecalho
        });
    }
   
   
    getUsuarios(){
        return this.api.get(this.urlAPIAuth);
    }
    
    
    
    autenticaUser(email, senha){
        
        let formData : FormData = new FormData();
        formData.append('username', email);
        formData.append('password', senha);
        formData.append('service', 'moodle_mobile_app');
        return this.api.post(this.urlAPIDados,  formData);
    }
   
    
    
    pegaMaterias(token, id) {
      
           
            let formData : FormData = new FormData();
        formData.append('wstoken', token);
        formData.append('moodlewsrestformat', JSON);
        formData.append('wsfunction', 'core_enrol_get_users_courses');
        formData.append('userid', 'id');   
           
             return this.api.post(this.urlAPIDados,  formData);
        }
        
    
    
    pegaCompetencias(idcurso, id) {


           
              let formData : FormData = new FormData();
        formData.append('courseid', idcurso);
        formData.append('moodlewssettingfilter', true);
        formData.append('wsfunction', 'tool_lp_data_for_course_competencies_page e wstoken');
        formData.append('userid', 'id');   
           
            return this.api.post(this.urlAPIDados,  formData);
    }
    

    pegaNotaCompetencias(){
        
        
          
          
          
           let formData : FormData = new FormData();
        formData.append('courseid', idcurso);
        formData.append('moodlewssettingfilter', true);
        formData.append('moodlewssettingfileurl', true);
        formData.append('wsfunction', 'tool_lp_data_for_course_competencies_page e wstoken');
        formData.append('userid', id);  
        formData.append('wstoken', token); 
       formData.append('competencyid', idcompetencia); 
          
          
           return this.api.post(this.urlAPIDados,  formData);
        
    
        
        
        
    }

}