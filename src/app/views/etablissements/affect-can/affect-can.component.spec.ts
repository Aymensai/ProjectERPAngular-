import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectCanComponent } from './affect-can.component';

describe('AffectCanComponent', () => {
  let component: AffectCanComponent;
  let fixture: ComponentFixture<AffectCanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffectCanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffectCanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
