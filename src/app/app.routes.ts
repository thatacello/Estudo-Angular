import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';
import { DataBidingComponent } from './demos/data-biding/data-biding.component';
import { HomeComponent } from './navegacao/home/home.component';
import { Routes } from "@angular/router";
import { ContatoComponent } from './institucional/contato/contato.component';
import { SobreComponent } from './institucional/sobre/sobre.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'contato', component: ContatoComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'feature-data-biding', component: DataBidingComponent },
    { path: 'produtos', component: ListaProdutoComponent },
    { path: 'produto-detalhe/:id', component: ListaProdutoComponent },
    { path: 'carrinho/:id', component: ListaProdutoComponent }
];