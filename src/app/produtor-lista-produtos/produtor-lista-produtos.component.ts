import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ProdutorService } from '../produtor.service';

@Component({
  selector: 'app-produtor-lista-produtos',
  templateUrl: './produtor-lista-produtos.component.html',
  styleUrls: ['./produtor-lista-produtos.component.css']
})
export class ProdutorListaProdutosComponent implements OnInit {

  produtos = [];

  constructor(private produtorService: ProdutorService, private Auth: AuthService) { }

  ngOnInit() {

    const num = localStorage.length;

    console.log(num);
    if (num === 1) {
      this.actuliza();
    }
  }

  actuliza() {
    this.Auth.getUserName().subscribe(
      data => {
        console.log(data);
        this.produtorService.getProdutosProdutor(data.email)
          .subscribe(
            res => this.produtos = res,
            err => console.log(err)
          );
      },
      error => console.log('error')
    );
  }

  apagarProduto(produto) {
      console.log(produto._id);
      console.log(produto.nome);
      const produtoId = produto._id;
      this.produtorService.deleteProduto(produtoId).subscribe(data => {
        if (data) {
          console.log(data);
          this.actuliza();
        } else {
          console.log('error');
        }
      });
  }
}
