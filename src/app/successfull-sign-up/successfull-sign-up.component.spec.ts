import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfullSignUpComponent } from './successfull-sign-up.component';

describe('SuccessfullSignUpComponent', () => {
  let component: SuccessfullSignUpComponent;
  let fixture: ComponentFixture<SuccessfullSignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessfullSignUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfullSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
