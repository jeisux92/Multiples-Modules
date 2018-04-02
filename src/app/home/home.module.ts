import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from '../user/user.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'User', component: UserComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    HomeComponent,
    UserComponent
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
