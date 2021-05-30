import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectedIssueCardComponent } from './detectedIssue-card.component';

describe('DetectedIssueCardComponent', () => {
  let component: DetectedIssueCardComponent;
  let fixture: ComponentFixture<DetectedIssueCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetectedIssueCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectedIssueCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
