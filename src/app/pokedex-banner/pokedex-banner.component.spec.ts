import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexBannerComponent } from './pokedex-banner.component';

describe('PokedexBannerComponent', () => {
  let component: PokedexBannerComponent;
  let fixture: ComponentFixture<PokedexBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokedexBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokedexBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
