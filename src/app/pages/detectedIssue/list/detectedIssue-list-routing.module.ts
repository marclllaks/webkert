import { DetectedIssueListComponent } from './detectedIssue-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: DetectedIssueListComponent,
        data: { title: 'Beadandó feladat' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DetectedIssueListRoutingModule { }