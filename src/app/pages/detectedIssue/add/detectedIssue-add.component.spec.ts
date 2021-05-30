import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectedIssueAddComponent } from './detectedIssue-add.component';

describe('DetectedIssueComponent', () => {
  let component: DetectedIssueAddComponent;
  let fixture: ComponentFixture<DetectedIssueAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetectedIssueAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectedIssueAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
