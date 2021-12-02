import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsChallengeITComponent } from './news-challenge-it.component';

describe('NewsChallengeITComponent', () => {
  let component: NewsChallengeITComponent;
  let fixture: ComponentFixture<NewsChallengeITComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsChallengeITComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsChallengeITComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
