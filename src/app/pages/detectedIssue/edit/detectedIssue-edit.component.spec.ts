import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetectedIssueEditComponent } from './detectedIssue-edit.component';

describe('EditComponent', () => {
  let component: DetectedIssueEditComponent;
  let fixture: ComponentFixture<DetectedIssueEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetectedIssueEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectedIssueEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
