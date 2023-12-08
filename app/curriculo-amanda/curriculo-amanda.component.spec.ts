import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculoAmandaComponent } from './curriculo-amanda.component';

describe('CurriculoAmandaComponent', () => {
  let component: CurriculoAmandaComponent;
  let fixture: ComponentFixture<CurriculoAmandaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurriculoAmandaComponent]
    });
    fixture = TestBed.createComponent(CurriculoAmandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
