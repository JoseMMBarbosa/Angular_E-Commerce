import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProdutorComponent } from './produtor/produtor.component';
import { RegistoProdutorComponent } from './registo-produtor/registo-produtor.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './auth.service';
import { HomeService } from './home.service';
import { LogoutComponent } from './logout/logout.component';
import { NavComponent } from './nav/nav.component';
import { ProdutorProdutoComponent } from './produtor-produto/produtor-produto.component';
import { ProdutorService } from './produtor.service';
import { ProdutorListaProdutosComponent } from './produtor-lista-produtos/produtor-lista-produtos.component';
import { AdminComponent } from './admin/admin.component';
import { AdminListaProdutoresComponent } from './admin-lista-produtores/admin-lista-produtores.component';
import { AdminCriarProdutorComponent } from './admin-criar-produtor/admin-criar-produtor.component';
import { ProdutorVendasComponent } from './produtor-vendas/produtor-vendas.component';
import { AdminLocalComponent } from './admin-local/admin-local.component';
import { AdminQualificacaoComponent } from './admin-qualificacao/admin-qualificacao.component';
import { AdminEntidadeComponent } from './admin-entidade/admin-entidade.component';
import { AdminCategoriaComponent } from './admin-categoria/admin-categoria.component';
import { AdminSubcategoriaComponent } from './admin-subcategoria/admin-subcategoria.component';
import { AdminTipoProdutoComponent } from './admin-tipo-produto/admin-tipo-produto.component';
import { DataService } from './data.service';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProdutorHistoricoVendasComponent } from './produtor-historico-vendas/produtor-historico-vendas.component';
import { ComprasComponent } from './compras/compras.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ComprasDetalhesComponent } from './compras-detalhes/compras-detalhes.component';
import { AdminCriarAdminsComponent } from './admin-criar-admins/admin-criar-admins.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ProdutorComponent,
    RegistoProdutorComponent,
    HomeComponent,
    LogoutComponent,
    NavComponent,
    ProdutorProdutoComponent,
    ProdutorListaProdutosComponent,
    AdminComponent,
    AdminListaProdutoresComponent,
    AdminCriarProdutorComponent,
    ProdutorVendasComponent,
    AdminLocalComponent,
    AdminQualificacaoComponent,
    AdminEntidadeComponent,
    AdminCategoriaComponent,
    AdminSubcategoriaComponent,
    AdminTipoProdutoComponent,
    ShoppingCartComponent,
    ProdutorHistoricoVendasComponent,
    ComprasComponent,
    ClienteComponent,
    ComprasDetalhesComponent,
    AdminCriarAdminsComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthService, HomeService, ProdutorService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
