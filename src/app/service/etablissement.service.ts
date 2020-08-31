import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Etablissementservice {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { 
  }
 
  getEtablissements(){
    return this.http.get(this.baseUrl + 'users');
  }

    getEtablissement(id){
        return this.http.get(this.baseUrl+ 'users/'+ id);
    }

   
    updateEtablissement(id, editedEtablissement){
        return this.http.put(this.baseUrl +'users/' + id , editedEtablissement);
       
  
    }

    deleteEtablissement(id){
        return this.http.delete(this.baseUrl +'users/' + id) ;
    }

    sendMailtoall(data){
        return this.http.post(this.baseUrl +'/sendMail'  ,  data);
}


}
