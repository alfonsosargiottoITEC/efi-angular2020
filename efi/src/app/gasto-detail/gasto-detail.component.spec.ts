import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastoDetailComponent } from './gasto-detail.component';

describe('GastoDetailComponent', () => {
  let component: GastoDetailComponent;
  let fixture: ComponentFixture<GastoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GastoDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GastoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
