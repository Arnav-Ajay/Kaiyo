import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CodesComponent } from './codes/codes.component';
import { GraphicsComponent } from './graphics/graphics.component';

const routes: Routes = [
  { path: 'code', component: CodesComponent },
  { path: 'graphics', component: GraphicsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
