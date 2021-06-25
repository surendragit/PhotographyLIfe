import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NEWSComponent } from './news.component';

describe('NEWSComponent', () => {
  let component: NEWSComponent;
  let fixture: ComponentFixture<NEWSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NEWSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NEWSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
