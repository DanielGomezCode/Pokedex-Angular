import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexUseComponent } from './pokedex-use.component';

describe('PokedexUseComponent', () => {
  let component: PokedexUseComponent;
  let fixture: ComponentFixture<PokedexUseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokedexUseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokedexUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
