import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NaukriModuleComponent } from './naukri.component';


const routes: Routes = [
  {
    path: '',
    component: NaukriModuleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NaukriRoutingModule { }
