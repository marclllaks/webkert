import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { DetectedIssue } from 'src/app/shared/models/detectedIssue.model';
import { DetectedIssueEditComponent } from '../edit/detectedIssue-edit.component';
import { DetectedIssueLookComponent } from '../look/detectedIssue-look.component';

@Component({
  selector: 'app-detectedIssue-card',
  templateUrl: './detectedIssue-card.component.html',
  styleUrls: ['./detectedIssue-card.component.scss']
})
export class DetectedIssueCardComponent implements OnInit {
  @Input() detectedIssue?: DetectedIssue;
  @Output() getDetectedIssue = new EventEmitter<DetectedIssue>();

  constructor(private service: FbBaseService<DetectedIssue>, private dialog: MatDialog) { }



  ngOnInit(): void {
  }

  deleteObject(id: string): void {
    this.service.delete('detectedIssue', id);
  }

  openUpdateDialog(issue: DetectedIssue): void {
    const dialogRef = this.dialog.open(DetectedIssueEditComponent, { data: { detectedIssue: issue }});
    dialogRef.afterClosed().subscribe((issueForm: DetectedIssue) => {
      this.service.update('detectedIssue', issue.id, issueForm);
    }, err => {
      console.warn(err);
    });
  }

  openLookDialog(issue: DetectedIssue): void {
    const dialogRef = this.dialog.open(DetectedIssueLookComponent, { data: { detectedIssue: issue }});
  }

}
