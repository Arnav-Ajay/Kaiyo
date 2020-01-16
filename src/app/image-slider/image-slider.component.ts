import { Component, OnInit, ViewChild } from '@angular/core';
// import * as M from '/home/arnav/angularProjects/Cest-La-Vie/src/assets/materialize/js/materialize.min.js';
import { NgbSlideEvent, NgbSlideEventSource, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {
  
  // images = [, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  images = ["../assets/opm.jpg", "../assets/AoT.jpeg", "../assets/myhero.jpeg", "../assets/rezero.jpg" ]
  
  showNavigationArrows = true;
  showNavigationIndicators = true;
  pauseOnHover = true;

  @ViewChild('mycarousel', {static : true}) carousel: NgbCarousel;

  constructor() {}

  ngOnInit() {}

  onSlide(slideEvent: NgbSlideEvent) {
    console.log(slideEvent.source);
    console.log(NgbSlideEventSource.ARROW_LEFT);
    console.log(slideEvent.paused);
    console.log(NgbSlideEventSource.INDICATOR);
    console.log(NgbSlideEventSource.ARROW_RIGHT);
  }

  startCarousel() {
    this.carousel.cycle();
  }

}
