import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculoJoaoComponent } from './curriculo-joao.component';

describe('CurriculoJoaoComponent', () => {
  let component: CurriculoJoaoComponent;
  let fixture: ComponentFixture<CurriculoJoaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurriculoJoaoComponent]
    });
    fixture = TestBed.createComponent(CurriculoJoaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
