import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectedIssueListComponent } from './detectedIssue-list.component';

describe('DetectedIssueListComponent', () => {
  let component: DetectedIssueListComponent;
  let fixture: ComponentFixture<DetectedIssueListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetectedIssueListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectedIssueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
