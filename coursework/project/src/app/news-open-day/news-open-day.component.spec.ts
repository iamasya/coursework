import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsOpenDayComponent } from './news-open-day.component';

describe('NewsOpenDayComponent', () => {
  let component: NewsOpenDayComponent;
  let fixture: ComponentFixture<NewsOpenDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsOpenDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsOpenDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
