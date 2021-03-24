import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewProjectComponent } from './view-project/view-project.component';

const routes: Routes = [
  { path: 'view-project', component: ViewProjectComponent },
  // { path: 'graphics', component: GraphicsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
