import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsoneComponent } from './newsone.component';

describe('NewsoneComponent', () => {
  let component: NewsoneComponent;
  let fixture: ComponentFixture<NewsoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
