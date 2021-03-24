import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from '../service-api.service';
import {MatDialog} from '@angular/material/dialog';
import { ViewProjectComponent } from '../view-project/view-project.component';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ServiceApiService]
})
export class ProjectsComponent implements OnInit {

  constructor(private api:ServiceApiService, public dialog: MatDialog) {
    this.getProjects();
  }

  button_text = 'View Project'

  projects = [];
  
  getProjects = () => {
    this.api.getAllProjects().subscribe(
      data => {
        this.projects = data;
      },
      error => {
        console.log(error);
      })
  }

  public gitOpen(url : string) {
    window.open(url, "_blank");
    console.log(url)
  }

  public projOpen(proj : object) {
    const dialogRef = this.dialog.open(ViewProjectComponent, {
      backdropClass: 'custom-dialog-backdrop-class',
      panelClass: 'custom-dialog-panel-class',
      data: { pageValue: proj }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }
  

  ngOnInit() {}

}
