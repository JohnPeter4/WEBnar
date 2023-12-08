import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculoDiegoComponent } from './curriculo-diego.component';

describe('CurriculoDiegoComponent', () => {
  let component: CurriculoDiegoComponent;
  let fixture: ComponentFixture<CurriculoDiegoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurriculoDiegoComponent]
    });
    fixture = TestBed.createComponent(CurriculoDiegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
