import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Candidateservice {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { 
  }
 
  getCandidates(){
    return this.http.get(this.baseUrl + 'candidate');
  }

    getCandidate(id){
        return this.http.get(this.baseUrl+ 'candidate/'+ id);
    }

  
    addCandidate(addedCandidate){
      return this.http.post(this.baseUrl + 'candidate' , addedCandidate);
    }

   
    updateCandidate(id, editedCandidate){
        return this.http.put(this.baseUrl +'candidate/' + id , editedCandidate);
       
  
    }

    deleteCandidate(id){
        return this.http.delete(this.baseUrl +'candidate/' + id) ;
    }
    affectCandidate(idEtablissement, idCandidate ){
      return this.http.post(this.baseUrl + 'affect/' + idEtablissement  + '/' + idCandidate, {});
    }
}
