import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehivlesComponent } from './vehivles.component';

describe('VehivlesComponent', () => {
  let component: VehivlesComponent;
  let fixture: ComponentFixture<VehivlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehivlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehivlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
