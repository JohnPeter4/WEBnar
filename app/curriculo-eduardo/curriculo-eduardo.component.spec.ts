import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculoEduardoComponent } from './curriculo-eduardo.component';

describe('CurriculoEduardoComponent', () => {
  let component: CurriculoEduardoComponent;
  let fixture: ComponentFixture<CurriculoEduardoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurriculoEduardoComponent]
    });
    fixture = TestBed.createComponent(CurriculoEduardoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
