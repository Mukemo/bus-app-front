import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxiCreateComponent } from './taxi-create.component';

describe('TaxiCreateComponent', () => {
  let component: TaxiCreateComponent;
  let fixture: ComponentFixture<TaxiCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxiCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaxiCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
