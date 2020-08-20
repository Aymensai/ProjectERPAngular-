import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtablissementService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { 
  }
 
  getCandidates(){
    return this.http.get(this.baseUrl + 'users');
  }

    getCandidate(id){
        return this.http.get(this.baseUrl+ 'users/'+ id);
    }

  
    addCandidate(addedCandidate){
      return this.http.post(this.baseUrl + 'users' , addedCandidate);
    }

   
    updateCandidate(id, editedCandidate){
        return this.http.put(this.baseUrl +'users/' + id , editedCandidate);
       
  
    }

    deleteCandidate(id){
        return this.http.delete(this.baseUrl +'users/' + id) ;
    }

}
