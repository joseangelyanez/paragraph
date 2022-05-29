import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphDashboardComponent } from './paragraph-dashboard.component';

describe('ParagraphDashboardComponent', () => {
  let component: ParagraphDashboardComponent;
  let fixture: ComponentFixture<ParagraphDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParagraphDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParagraphDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
