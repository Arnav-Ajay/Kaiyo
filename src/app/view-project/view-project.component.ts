import { Inject } from '@angular/core';
import { Component, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent implements OnInit {

  project : object;

  constructor(public dialogRef: MatDialogRef<ViewProjectComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.project = data.pageValue

    console.log(this.project);
 }

  ngOnInit() {
  }
  closeDialog() {
    // this.dialogRef.close({ event: 'close', data: this.project });
    this.dialogRef.close({ event: 'close'});
  }

}
