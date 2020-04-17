import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RegistoProdutorComponent} from './registo-produtor/registo-produtor.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { ProdutorComponent } from './produtor/produtor.component';
import { ProdutorProdutoComponent } from './produtor-produto/produtor-produto.component';
import { AdminComponent } from './admin/admin.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ComprasComponent } from './compras/compras.component';
import { ClienteComponent } from './cliente/cliente.component';



const routes: Routes = [
{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},
{
  path: 'home',
  component: HomeComponent
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'register',
  component: RegisterComponent
},
{
  path: 'registerProdutor',
  component: RegistoProdutorComponent
},
{
  path: 'logout',
  component: LogoutComponent
},
{
  path: 'admin',
  component: AdminComponent
},
{
  path: 'compras',
  component: ComprasComponent
},
{
  path: 'cliente',
  component: ClienteComponent
},
{
  path: 'produtor',
  component: ProdutorComponent,
  children: [
    {path: '', redirectTo: 'criarProduto', pathMatch: 'full'},
    {path: 'locriarProdutogout', component: ProdutorProdutoComponent}
  ]
},
{
  path: 'cart',
  component: ShoppingCartComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
