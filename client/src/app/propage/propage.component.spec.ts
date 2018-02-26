import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropageComponent } from './propage.component';

describe('PropageComponent', () => {
  let component: PropageComponent;
  let fixture: ComponentFixture<PropageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
