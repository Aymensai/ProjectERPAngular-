import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PictureService {
  picture$: BehaviorSubject<string>;
  constructor() {
    this.picture$ = new BehaviorSubject(this.getPicture());
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