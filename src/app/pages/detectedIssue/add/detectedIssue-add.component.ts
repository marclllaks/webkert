import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-DetectedIssue-add',
  templateUrl: './DetectedIssue-add.component.html',
  styleUrls: ['./DetectedIssue-add.component.scss']
})
export class DetectedIssueAddComponent implements OnInit {

  form: FormGroup = new FormGroup({
    status: new FormControl('', Validators.required),
    code: new FormControl('', Validators.required),
    severity: new FormControl('', Validators.required),
    patient: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    implicated: new FormControl('', Validators.required),
    evidence: new FormControl('', Validators.required),
    detail: new FormControl('', Validators.required),
    reference: new FormControl('', Validators.required),
  });

  constructor(public dialogRef: MatDialogRef<DetectedIssueAddComponent>) { }

  ngOnInit(): void {
  }
}
