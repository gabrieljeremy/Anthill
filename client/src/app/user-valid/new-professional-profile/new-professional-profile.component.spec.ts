import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProfessionalProfileComponent } from './new-professional-profile.component';

describe('NewProfessionalProfileComponent', () => {
  let component: NewProfessionalProfileComponent;
  let fixture: ComponentFixture<NewProfessionalProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProfessionalProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProfessionalProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
