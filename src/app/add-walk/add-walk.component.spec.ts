import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWalkComponent } from './add-walk.component';

describe('AddWalkComponent', () => {
  let component: AddWalkComponent;
  let fixture: ComponentFixture<AddWalkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWalkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
