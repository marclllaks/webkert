import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetectedIssueCardComponent } from './detectedIssue-card.component';
import { OnHoverModule } from 'src/app/shared/directives/on-hover/on-hover.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { DetectedIssueEditModule } from '../edit/detectedIssue-edit.module';

@NgModule({
  declarations: [DetectedIssueCardComponent],
  imports: [
    CommonModule, MatCardModule, MatIconModule, MatButtonModule, OnHoverModule, DetectedIssueEditModule
  ],
  exports: [DetectedIssueCardComponent]
})
export class DetectedIssueCardModule { }
