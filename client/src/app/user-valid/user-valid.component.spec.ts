import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserValidComponent } from './user-valid.component';

describe('UserValidComponent', () => {
  let component: UserValidComponent;
  let fixture: ComponentFixture<UserValidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserValidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserValidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
