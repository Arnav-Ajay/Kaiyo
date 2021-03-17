import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from '../service-api.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ServiceApiService]
})
export class ProjectsComponent implements OnInit {

  // constructor() {}
  constructor(private api:ServiceApiService) {
    this.getProjects();
  }

  button_text = 'View Project'

  projects = [
    // {
    //   title: 'AI Projects',
    //   description: 'NLP, ML, DL, ANN, SR, CV',
    //   img: '/assets/opm.jpg'
    // },
    // {
    //   title: 'Other Projects',
    //   description: 'Angular, ffmpeg, android',
    //   img: '/assets/opm.jpg'
    // },

  ];

  getProjects = () => {
    this.api.getAllProjects().subscribe(
      data => {
        this.projects = data;
      },
      error => {
        console.log(error);
      })
  }

  ngOnInit() {}

}
