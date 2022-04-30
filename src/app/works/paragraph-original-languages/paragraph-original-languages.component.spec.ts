import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphOriginalLanguagesComponent } from './paragraph-original-languages.component';

describe('ParagraphOriginalLanguagesComponent', () => {
  let component: ParagraphOriginalLanguagesComponent;
  let fixture: ComponentFixture<ParagraphOriginalLanguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParagraphOriginalLanguagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParagraphOriginalLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
