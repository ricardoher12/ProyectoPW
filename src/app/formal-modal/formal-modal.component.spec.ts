import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormalModalComponent } from './formal-modal.component';

describe('FormalModalComponent', () => {
  let component: FormalModalComponent;
  let fixture: ComponentFixture<FormalModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormalModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormalModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
