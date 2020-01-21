import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.css']
})
export class GraphicsComponent implements OnInit {

  constructor() { }
  graphics = [
    {
      title: 'Illustrations',
      description: 'creation of digital images through a sequence of commands or mathematical statements that place lines and shapes in a given two-dimensional or three-dimensional space. In physics, a vector is a representation of both a quantity and a direction at the same time. Most commonly used for creating logos, illustrations and print layouts.',
      buttonText: 'View Illustrations',
      img: '/assets/opm.jpg'
    },
    {
      title: 'Motion Graphics',
      description: 'Motion graphics are pieces of animation or digital footage which create the illusion of motion or rotation, and are usually combined with audio for use in multimedia projects.',
      buttonText: 'View Motion Graphics',
      img: '/assets/opm.jpg'
    }

  ];


  ngOnInit() {
  }

}
