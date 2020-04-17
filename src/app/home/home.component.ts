import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categorias = [];
  produtos = [];
  Email = '';

  constructor(private homeServise: HomeService,
              private Auth: AuthService,
              private adminService: AdminService,
              private dataService: DataService,
              private router: Router ) { }

    tokenName = '';


  ngOnInit() {
    const num = localStorage.length;

    this.homeServise.getProdutos()
    .subscribe(
      res => this.produtos = res,
      err => console.log(err)
    );
    if (num === 1) {
      this.dataService.updateStatus(true);
      this.Auth.getUserName().subscribe(
        data => this.tokenName = data.user.toString(),
        error => console.log('error')
      );
    }
    if (num === 1) {
      this.Auth.getUserName().subscribe(
        data => this.Email = data.email.toString(),
        error => console.log('error')
      );
    }

    this.adminService.getTipoProduto()
    .subscribe(
      res => this.categorias = res,
      err => console.log(err)
    );
  }

  getProdutoTipo(categoria) {

    this.homeServise.postProdutoTipo(categoria._id)
    .subscribe(
      res => this.produtos = res,
      err => console.log(err)
    );

  }

  getPesquisa(event) {
    event.preventDefault();
    console.log(event);
    const target = event.target;
    const pesquisa = target.querySelector('#pesquisa').value;
    this.homeServise.getPesquisa(pesquisa)
    .subscribe(
      res => this.produtos = res,
      err => console.log(err)
    );
  }

  addCart(produto) {

    console.log(produto);
    // this.dataService.addToCart(produto.nome);
    this.dataService.addprodcarrinho(produto);
    this.dataService.checK();
    this.router.navigate(['cart']);
  }
}
