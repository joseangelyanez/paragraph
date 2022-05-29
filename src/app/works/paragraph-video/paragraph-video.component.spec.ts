import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphVideosComponent } from './paragraph-video.component';

describe('VideoListComponent', () => {
  let component: ParagraphVideosComponent;
  let fixture: ComponentFixture<ParagraphVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParagraphVideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParagraphVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
