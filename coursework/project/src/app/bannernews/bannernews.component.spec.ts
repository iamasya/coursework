import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannernewsComponent } from './bannernews.component';

describe('BannernewsComponent', () => {
  let component: BannernewsComponent;
  let fixture: ComponentFixture<BannernewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannernewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannernewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
