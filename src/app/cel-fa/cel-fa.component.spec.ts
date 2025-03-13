import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelFaComponent } from './cel-fa.component';

describe('CelFaComponent', () => {
  let component: CelFaComponent;
  let fixture: ComponentFixture<CelFaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CelFaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CelFaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
