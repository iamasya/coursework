import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsConferenceWhenComponent } from './news-conference-when.component';

describe('NewsConferenceWhenComponent', () => {
  let component: NewsConferenceWhenComponent;
  let fixture: ComponentFixture<NewsConferenceWhenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsConferenceWhenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsConferenceWhenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
