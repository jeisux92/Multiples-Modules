import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';


const routes: Routes = [
  //{path:'',component:LogInComponent},  
  { path: 'Home', loadChildren: () => HomeModule }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HomeModule,
    RouterModule.forRoot(routes, { useHash: false, preloadingStrategy: PreloadAllModules }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
