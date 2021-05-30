import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DetectedIssue } from 'src/app/shared/models/detectedIssue.model';

@Component({
  selector: 'app-detectedIssue-look',
  templateUrl: './detectedIssue-look.component.html',
  styleUrls: ['./detectedIssue-look.component.scss']
})
export class DetectedIssueLookComponent implements OnInit {
  @Input() detectedIssue: DetectedIssue | undefined;

  form: any = {
    status: this.data.detectedIssue.status,
    code: this.data.detectedIssue.code,
    severity: this.data.detectedIssue.severity,
    patient: this.data.detectedIssue.patient,
    author: this.data.detectedIssue.author,
    implicated: this.data.detectedIssue.implicated,
    evidence: this.data.detectedIssue.evidence,
    detail: this.data.detectedIssue.detail,
    reference: this.data.detectedIssue.reference
  };

  constructor(public dialogRef: MatDialogRef<DetectedIssueLookComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }
}
