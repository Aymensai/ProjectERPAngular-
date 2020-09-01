import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class PictureService {

  baseUrl = environment.baseUrl;
  picture$: BehaviorSubject<string>;

  constructor(private http: HttpClient) {
    this.picture$ = new BehaviorSubject(this.getPicture());
  }

uploadPicture(id, uploadPicture){
  return this.http.post(this.baseUrl + 'upload/' + id , uploadPicture )

}
  reloadPicture() {
    this.picture$.next(this.getPicture());
  }

  // get avatar from localStorage
  getPicture() {
    const picture = localStorage.getItem('picture');
    if (picture !== null && picture !== undefined) {
      return picture;
    } else {
      return '';
    }
  }
}