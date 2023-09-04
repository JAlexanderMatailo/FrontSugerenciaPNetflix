import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoPeliculaComponent } from './tipo-pelicula.component';

describe('TipoPeliculaComponent', () => {
  let component: TipoPeliculaComponent;
  let fixture: ComponentFixture<TipoPeliculaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipoPeliculaComponent]
    });
    fixture = TestBed.createComponent(TipoPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
