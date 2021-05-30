import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetectedIssueListComponent } from './detectedIssue-list.component';
import { DetectedIssueListRoutingModule } from './detectedIssue-list-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ContainerModule } from 'src/app/shared/components/container/container.module';
import { DetectedIssueCardModule } from '../card/detectedIssue-card.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DetectedIssueAddModule } from '../add/detectedIssue-add.module';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [DetectedIssueListComponent],
  imports: [
    CommonModule, DetectedIssueListRoutingModule, MatToolbarModule, ContainerModule, DetectedIssueCardModule, MatButtonModule, MatIconModule, DetectedIssueAddModule,
    MatAutocompleteModule, MatInputModule, FormsModule, ReactiveFormsModule, MatListModule, MatTableModule,
    MatProgressSpinnerModule
  ],
  exports: [DetectedIssueListComponent]
})
export class DetectedIssueListModule { }
