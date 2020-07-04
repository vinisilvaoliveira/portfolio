import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainBannerComponent } from './core/main-banner/main-banner.component';


const routes: Routes = [
  {
    path: '',
    component: MainBannerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
