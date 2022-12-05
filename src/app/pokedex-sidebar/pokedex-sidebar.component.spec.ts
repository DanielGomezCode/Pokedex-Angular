import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexSidebarComponent } from './pokedex-sidebar.component';

describe('PokedexSidebarComponent', () => {
  let component: PokedexSidebarComponent;
  let fixture: ComponentFixture<PokedexSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokedexSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokedexSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
