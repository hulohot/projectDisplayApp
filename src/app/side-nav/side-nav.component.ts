import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})


export class SideNavComponent implements OnInit {

  sideRoutes = [];

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.config.forEach(route => {
      if (route.data && !route.children) {

        let sideR: SideRoutes = { routerLink: route.path, title: route.data.title, hasChildren: false };
        this.sideRoutes.push(sideR);
      } else if (route.children) {
        let sideR: SideRoutes = { routerLink: route.path, title: route.data.title, hasChildren: true, children: route.children };
        this.sideRoutes.push(sideR);
        // route.children.forEach(child => {
        //   if (child.path != '') {
        // let sideR: SideRoutes = {routerLink: route.path, title: route.data.title, hasChildren: true, children: newChildren};
        // this.sideRoutes.push(sideR);
      }
      // });
      // let sideR: SideRoutes = {routerLink: route.path, title: route.data.title, hasChildren: true, children: newChildren};
      // this.sideRoutes.push(sideR);
    });
  console.log(this.sideRoutes);
}

}

export interface SideRoutes {
  routerLink: String;
  title: String;
  hasChildren: boolean;
  children?: Route[];
}