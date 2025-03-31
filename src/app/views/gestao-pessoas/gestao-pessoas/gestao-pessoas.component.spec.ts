import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoPessoasComponent } from './gestao-pessoas.component';

describe('GestaoPessoasComponent', () => {
  let component: GestaoPessoasComponent;
  let fixture: ComponentFixture<GestaoPessoasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GestaoPessoasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestaoPessoasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
