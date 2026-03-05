import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsCreateComponent } from './hotels-create.component';

describe('HotelsCreateComponent', () => {
  let component: HotelsCreateComponent;
  let fixture: ComponentFixture<HotelsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelsCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HotelsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
