import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbaLateralComponent } from './aba-lateral.component';

describe('AbaLateralComponent', () => {
  let component: AbaLateralComponent;
  let fixture: ComponentFixture<AbaLateralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbaLateralComponent]
    });
    fixture = TestBed.createComponent(AbaLateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
