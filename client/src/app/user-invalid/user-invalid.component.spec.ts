import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInvalidComponent } from './user-invalid.component';

describe('UserInvalidComponent', () => {
  let component: UserInvalidComponent;
  let fixture: ComponentFixture<UserInvalidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInvalidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInvalidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
