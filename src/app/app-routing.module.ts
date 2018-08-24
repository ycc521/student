import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import {MainComponent} from './module/main/main.component';
import { MainframeComponent } from './components/mainframe/mainframe.component';
const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'mainframe', component: MainframeComponent,
    children:[
      {path:'main',component:MainComponent}
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
