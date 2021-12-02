import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsConferenceComponent } from './news-conference.component';

describe('NewsConferenceComponent', () => {
  let component: NewsConferenceComponent;
  let fixture: ComponentFixture<NewsConferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsConferenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsConferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
