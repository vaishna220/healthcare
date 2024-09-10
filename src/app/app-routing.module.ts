import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';

const routes: Routes = [
  {path:"",component:LandingpageComponent},
   {
    path: 'auth',    
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  
   {
    path: 'home',    
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
   {
    path: 'book',    
    loadChildren: () => import('./book/book.module').then(m => m.BookModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
