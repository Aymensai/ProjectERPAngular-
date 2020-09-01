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
  {  }
 
  
  ngOnInit() : void {
    
    this.logo = this.pictureService.picture$;
  }
 
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  logout(){
    localStorage.clear();
    this.router.navigateByUrl("/login");
  }
}
