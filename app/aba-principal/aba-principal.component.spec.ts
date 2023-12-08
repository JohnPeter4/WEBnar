import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbaPrincipalComponent } from './aba-principal.component';

describe('AbaPrincipalComponent', () => {
  let component: AbaPrincipalComponent;
  let fixture: ComponentFixture<AbaPrincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbaPrincipalComponent]
    });
    fixture = TestBed.createComponent(AbaPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
