import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, throwError } from 'rxjs';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { DetectedIssue } from 'src/app/shared/models/detectedIssue.model';
import { DetectedIssueAddComponent } from '../add/detectedIssue-add.component';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-detectedIssue-list',
  templateUrl: './detectedIssue-list.component.html',
  styleUrls: ['./detectedIssue-list.component.scss']
})
export class DetectedIssueListComponent implements OnInit {
  title = 'Beadandó feladat';
  list$: Observable<DetectedIssue[]> | null = null;

  errorObject = null;

  constructor(private service: FbBaseService<DetectedIssue>, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.get();
  }

  get(): void {
    this.errorObject = null;
    this.list$ = this.service.get('detectedIssue').pipe(
      catchError(err => {
        this.errorObject = err;
        return throwError(err);
      })
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DetectedIssueAddComponent, {});
    dialogRef.afterClosed().subscribe((issueForm: DetectedIssue) => {
      this.service.add('detectedIssue', issueForm);
    }, err => {
      console.warn(err);
    });
  }

}

