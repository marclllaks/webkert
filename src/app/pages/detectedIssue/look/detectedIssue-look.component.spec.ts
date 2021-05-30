import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetectedIssueLookComponent } from './detectedIssue-look.component';

describe('LookComponent', () => {
  let component: DetectedIssueLookComponent;
  let fixture: ComponentFixture<DetectedIssueLookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetectedIssueLookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectedIssueLookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
