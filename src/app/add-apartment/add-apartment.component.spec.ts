import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddApartmentComponent } from './add-apartment.component';

describe('AddApartmentComponent', () => {
  let component: AddApartmentComponent;
  let fixture: ComponentFixture<AddApartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddApartmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddApartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
