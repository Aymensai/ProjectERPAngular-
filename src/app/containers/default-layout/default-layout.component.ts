import {Component} from '@angular/core';
import { navItems } from '../../_nav';
import { Router } from '@angular/router';
import { PictureService } from '../../service/picture.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;
picture : any;
  constructor(private router: Router, private pictureService : PictureService)
  { }

  
  ngOnInit() : void {

  }
 
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  logout(){
    localStorage.clear();
    this.router.navigateByUrl("/login");
  }
}
