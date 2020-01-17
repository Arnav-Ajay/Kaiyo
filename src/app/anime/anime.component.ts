import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbSlideEvent, NgbSlideEventSource, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { url } from 'inspector';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

  isVisible= false;
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = false;
  imgURL = "";
  imgName = "";
  images = ["../assets/opm.jpg", "../assets/AoT.jpeg", "../assets/myhero.jpeg", "../assets/rezero.jpg" ]
  imgNames = ["One Punch Man", "Attack on Titans", "My Hero Academy", "Re: Zero"]

  images2D = [{url : "../assets/opm.jpg", name : "One Punch Man"},
   {url : "../assets/AoT.jpeg", name : "Attack on Titans"},
   {url : "../assets/myhero.jpeg", name : "My Hero Academy"}, 
   {url : "../assets/rezero.jpg", name : "Re: Zero"} ]

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
      this.isVisible= false;
    } else {
      this.carousel.pause();
      this.isVisible= true;

    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
    this.random();
  }

  // random(){
  //   this.img = this.imgNames[Math.floor(Math.random() * this.images.length)];
  // }
  // random(){
  //   this.img = this.images2D[Math.floor(Math.random() * this.images2D.length)];
  // }

  random(){
    let randNum = [0, 1, 2, 3][Math.floor(Math.random() * 4)];
    this.imgURL = this.images[randNum];
    this.imgName = this.imgNames[randNum];
    }

}
