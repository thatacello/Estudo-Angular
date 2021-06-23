import { ProdutoService } from './produtos/produtos.service';
import { rootRouterConfig } from './app.routes';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { HomeComponent } from './navegacao/home/home.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { DataBidingComponent } from './demos/data-biding/data-biding.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    SobreComponent,
    ContatoComponent,
    DataBidingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    [RouterModule.forRoot(rootRouterConfig, { useHash: false })]
  ],
  providers: [
    ProdutoService,
    { provide: APP_BASE_HREF, useValue: '/' } // prefixo de rota, poderia ser /admin
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }