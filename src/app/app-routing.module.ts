import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { P5DashboardComponent } from './p5-projects/p5-dashboard/p5-dashboard.component';
import { P5FlappyBirdComponent } from './p5-projects/p5-flappy-bird/p5-flappy-bird.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { title: 'Home' }
  },
  {
    path: 'p5-projects',
    component: P5DashboardComponent,
    data: { title: 'P5 Projects' },
    children: [
      { 
        path: '', redirectTo: 'P5DashboardComponent', pathMatch: 'full' 
      },
      { 
        path: 'p5-flappy-bird', component: P5FlappyBirdComponent,
        data: { title: 'Flappy Bird'}
      },
    ]
  },
  { path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
