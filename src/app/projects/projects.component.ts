import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  button_text = 'View Project'

  projects = [
    {
      title: 'AI Projects',
      description: 'NLP, ML, DL, ANN, SR, CV',
      img: '/assets/opm.jpg'
    },
    {
      title: 'Other Projects',
      description: 'Angular, ffmpeg, android',
      img: '/assets/opm.jpg'
    }

  ];


  ngOnInit() {
  }

}
