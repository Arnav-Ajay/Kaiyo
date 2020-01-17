import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCardModule}  from '@angular/material/card';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { CodesComponent } from './codes/codes.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AnimeComponent } from './anime/anime.component';
import { HttpClientModule } from "@angular/common/http";
import { ApiService } from './api.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GraphicsComponent,
    CodesComponent,
    ImageSliderComponent,
    HomeComponent,
    NavbarComponent,
    AnimeComponent
    ], 
    
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatRippleModule,
    HttpClientModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
