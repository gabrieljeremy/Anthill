import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePropageComponent } from './create-propage.component';

describe('CreatePropageComponent', () => {
  let component: CreatePropageComponent;
  let fixture: ComponentFixture<CreatePropageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePropageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePropageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
