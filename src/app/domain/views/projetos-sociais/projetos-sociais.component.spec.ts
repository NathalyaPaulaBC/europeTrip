import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetosSociaisComponent } from './projetos-sociais.component';

describe('ProjetosSociaisComponent', () => {
  let component: ProjetosSociaisComponent;
  let fixture: ComponentFixture<ProjetosSociaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetosSociaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetosSociaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
