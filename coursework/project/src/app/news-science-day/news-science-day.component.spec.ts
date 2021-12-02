import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsScienceDayComponent } from './news-science-day.component';

describe('NewsScienceDayComponent', () => {
  let component: NewsScienceDayComponent;
  let fixture: ComponentFixture<NewsScienceDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsScienceDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsScienceDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
