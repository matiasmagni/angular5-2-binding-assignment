import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivePComponent } from './reactive-p.component';

describe('ReactivePComponent', () => {
  let component: ReactivePComponent;
  let fixture: ComponentFixture<ReactivePComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactivePComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactivePComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
