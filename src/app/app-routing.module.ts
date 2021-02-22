import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CenterComponent} from './center/center.component';

const routes: Routes = [
  {path: '', component: CenterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
