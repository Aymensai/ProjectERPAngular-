import {Component} from '@angular/core';
import { navItems } from '../../_nav';
import { Router } from '@angular/router';
import { PictureService } from '../../service/picture.service';
import * as jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;
 private  logo ;
  constructor(private router: Router, private pictureService : PictureService)
  {  this.logo = this.pictureService.picture$;}

  access_token = localStorage.getItem('access_token');
  decoded = jwt_decode(this.access_token);
  pic = localStorage.getItem('picture') || {};
  
  ngOnInit() : void {
    console.log(this.logo);
    
    
    localStorage.setItem('picture', this.decoded.data.picture);
  }
 
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  logout(){
    localStorage.clear();
    this.router.navigateByUrl("/login");
  }
}
