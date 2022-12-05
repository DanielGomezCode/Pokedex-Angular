import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PokedexTableComponent } from './pokedex-table/pokedex-table.component';
import { PokedexBannerComponent } from './pokedex-banner/pokedex-banner.component';
import { PokedexSidebarComponent } from './pokedex-sidebar/pokedex-sidebar.component';
import { PokedexUseComponent } from './pokedex-use/pokedex-use.component';
import { PokedexTeamComponent } from './pokedex-team/pokedex-team.component';

// Servicio
import { HttpClientModule } from '@angular/common/http' 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokedexTableComponent,
    PokedexBannerComponent,
    PokedexSidebarComponent,
    PokedexUseComponent,
    PokedexTeamComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
