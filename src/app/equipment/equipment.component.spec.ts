import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EQUIPMENTComponent } from './equipment.component';

describe('EQUIPMENTComponent', () => {
  let component: EQUIPMENTComponent;
  let fixture: ComponentFixture<EQUIPMENTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EQUIPMENTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EQUIPMENTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



