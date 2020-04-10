import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevsRoomComponent } from './devs-room.component';

describe('DevsRoomComponent', () => {
  let component: DevsRoomComponent;
  let fixture: ComponentFixture<DevsRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevsRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevsRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
