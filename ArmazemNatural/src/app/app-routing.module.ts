import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { LoginComponent } from './login/login.component';
import { ProdutoComponent } from './produto/produto.component';

const routes: Routes = [
  
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},

  {path: 'login', component: LoginComponent},
  {path: 'cadastro', component: CadastroComponent},

  {path: 'inicio', component: InicioComponent},
  {path: 'produto', component: ProdutoComponent},
  {path: 'produtos', component: ListaProdutosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
