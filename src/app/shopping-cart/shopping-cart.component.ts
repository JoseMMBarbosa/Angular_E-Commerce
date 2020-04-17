import { Component, OnInit, ɵAPP_ID_RANDOM_PROVIDER } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  produtos: Array<string>;

  produtosServico = [];

  subTotal: number;

  totalComIva: number;

  totallinha = [];

  Email = '';

  constructor(private Auth: AuthService, private router: Router, private dataServise: DataService) { }

  ngOnInit() {

    const num = localStorage.length;

    if (num === 1) {
      this.Auth.getUserName().subscribe(
        data => this.Email = data.email.toString(),
        error => console.log('email do token erro')
      );
    }
    this.getProdutosServico();

    this.calculaTotal(this.produtosServico);

  }

  continuar() {
    this.router.navigate(['home']);
  }

  getProdutosServico() {
    this.produtosServico = this.dataServise.getProdutos();
    console.log('ola');
    console.log(this.produtosServico);

  }

  calculaTotal(produtosServico) {
    let total = 0;

    // tslint:disable-next-line: forin
    for (const i in produtosServico) {
      total = total + (produtosServico[i].preco * produtosServico[i].quantidade);
    }
    this.subTotal = total;
    const totalComIva = total * 1.23;
    this.totalComIva = totalComIva;
  }

  btplus(produto, i) {
    const qt = produto.quantidade;
    const qtfinal = qt + 1;
    if (qtfinal <= produto.stock) {
    this.produtosServico[i].quantidade = qtfinal;
    console.log(this.produtosServico);
    this.getProdutosServico();
    this.calculaTotal(this.produtosServico);
    }
  }

  btminus(produto, i) {
    const qt = produto.quantidade;
    const qtfinal = qt + -1;
    if ( qtfinal >= 1 ) {
    this.produtosServico[i].quantidade = qtfinal;
    console.log(this.produtosServico);
    this.getProdutosServico();
    this.calculaTotal(this.produtosServico);
    }
  }

  criarCompra() {
    this.dataServise.postEncomenda(this.Email, this.subTotal, this.totalComIva).subscribe(data => {
      if (data) {
        // tslint:disable-next-line: no-shadowed-variable
        this.dataServise.postLinha(this.Email, data._id, this.produtosServico).subscribe(data => {
          if (data) {
            // tslint:disable-next-line: no-shadowed-variable
            this.dataServise.editarproduto(this.produtosServico).subscribe( data => {
              if (data) {
              console.log(data);
              }
            });
            this.dataServise.apagarCarinho();
            this.apagarCarinho();
            this.getProdutosServico();
            this.router.navigate(['home']);
          } else {
            console.log('error');
          }
        });
      }
    });
  }

  apagarCarinho() {
    while (this.produtosServico.length > 0) {
      this.produtosServico.pop();
    }
  }
  removeProduto(produto) {
    this.dataServise.produtosCarrinho = this.produtosServico.filter(data => data !== produto);
    this.getProdutosServico();
    this.calculaTotal(this.produtosServico);
  }
}
