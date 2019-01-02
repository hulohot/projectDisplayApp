import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SideNavComponent } from './side-nav/side-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { SideNavModule } from './side-nav/side-nav.module';

import { P5DashboardComponent } from './p5-projects/p5-dashboard/p5-dashboard.component';
import { P5FlappyBirdComponent } from './p5-projects/p5-flappy-bird/p5-flappy-bird.component';


@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    DashboardComponent,
    P5DashboardComponent,
    P5FlappyBirdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    SideNavModule,
    MatCardModule,
    MatExpansionModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
