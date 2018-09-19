import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaFormModComponent } from './pizza-form-mod.component';

describe('PizzaFormModComponent', () => {
  let component: PizzaFormModComponent;
  let fixture: ComponentFixture<PizzaFormModComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaFormModComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaFormModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
