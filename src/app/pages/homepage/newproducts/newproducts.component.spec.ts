import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewproductsComponent } from './newproducts.component';

describe('NewproductsComponent', () => {
  let component: NewproductsComponent;
  let fixture: ComponentFixture<NewproductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewproductsComponent]
    });
    fixture = TestBed.createComponent(NewproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
