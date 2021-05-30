import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DetectedIssue } from 'src/app/shared/models/detectedIssue.model';

@Component({
  selector: 'app-detectedIssue-edit',
  templateUrl: './detectedIssue-edit.component.html',
  styleUrls: ['./detectedIssue-edit.component.scss']
})
export class DetectedIssueEditComponent implements OnInit {
  @Input() detectedIssue: DetectedIssue | undefined;

  form: FormGroup = new FormGroup({
    status: new FormControl(this.data.detectedIssue.status, Validators.required),
    code: new FormControl(this.data.detectedIssue.code, Validators.required),
    severity: new FormControl(this.data.detectedIssue.severity, Validators.required),
    patient: new FormControl(this.data.detectedIssue.patient, Validators.required),
    author: new FormControl(this.data.detectedIssue.author, Validators.required),
    implicated: new FormControl(this.data.detectedIssue.implicated, Validators.required),
    evidence: new FormControl(this.data.detectedIssue.evidence, Validators.required),
    detail: new FormControl(this.data.detectedIssue.detail, Validators.required),
    reference: new FormControl(this.data.detectedIssue.reference, Validators.required),
  });

  constructor(public dialogRef: MatDialogRef<DetectedIssueEditComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }
}
