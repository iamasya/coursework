import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannergalComponent } from './bannergal.component';

describe('BannergalComponent', () => {
  let component: BannergalComponent;
  let fixture: ComponentFixture<BannergalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannergalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannergalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
