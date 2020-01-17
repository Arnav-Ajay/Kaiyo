import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraphicsComponent } from './graphics/graphics.component';
import { CodesComponent } from './codes/codes.component';
import { HomeComponent } from './home/home.component';
import { AnimeComponent } from './anime/anime.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'graphics', component: GraphicsComponent},
  { path: 'codes', component: CodesComponent},
  { path: 'anime', component: AnimeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
