import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './domain/components/template/template.component';
import { ToolbarComponent } from './domain/components/toolbar/toolbar.component';
import { HomeComponent } from './domain/views/home/home.component';
import { FooterComponent } from './domain/components/footer/footer.component';
import { MacroMenuComponent } from './domain/components/macro-menu/macro-menu.component';
import { PresentationCardsComponent } from './domain/components/presentation-cards/presentation-cards.component';
import { MenuComponent } from './domain/components/menu/menu.component';
import { SobreNosComponent } from './domain/views/sobre-nos/sobre-nos.component';
import { OndeEstamosComponent } from './domain/views/onde-estamos/onde-estamos.component';
import { VideosComponent } from './domain/views/videos/videos.component';
import { RoteiroComponent } from './domain/views/roteiro/roteiro.component';
import { ProjetosSociaisComponent } from './domain/views/projetos-sociais/projetos-sociais.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    ToolbarComponent,
    HomeComponent,
    FooterComponent,
    MacroMenuComponent,
    PresentationCardsComponent,
    MenuComponent,
    SobreNosComponent,
    OndeEstamosComponent,
    VideosComponent,
    RoteiroComponent,
    ProjetosSociaisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
