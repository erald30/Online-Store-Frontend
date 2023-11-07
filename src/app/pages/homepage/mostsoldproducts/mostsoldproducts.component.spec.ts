import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostsoldproductsComponent } from './mostsoldproducts.component';

describe('MostsoldproductsComponent', () => {
  let component: MostsoldproductsComponent;
  let fixture: ComponentFixture<MostsoldproductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostsoldproductsComponent]
    });
    fixture = TestBed.createComponent(MostsoldproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
