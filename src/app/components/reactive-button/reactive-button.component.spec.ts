import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveButtonComponent } from './reactive-button.component';

describe('ReactiveButtonComponent', () => {
  let component: ReactiveButtonComponent;
  let fixture: ComponentFixture<ReactiveButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
