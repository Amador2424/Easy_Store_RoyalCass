import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpReservationComponent } from './up-reservation.component';

describe('UpReservationComponent', () => {
  let component: UpReservationComponent;
  let fixture: ComponentFixture<UpReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpReservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
