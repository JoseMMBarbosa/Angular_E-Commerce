import { Component, OnInit } from '@angular/core';
import { ProdutorService } from '../produtor.service';
import { Locais } from '../locais';
import { AuthService } from '../auth.service';
import { AdminService } from '../admin.service';

// tslint:disable-next-line: class-name

@Component({
  selector: 'app-produtor-produto',
  templateUrl: './produtor-produto.component.html',
  styleUrls: ['./produtor-produto.component.css']
})
export class ProdutorProdutoComponent implements OnInit {

  tipoProdutos = [];
  locais = [];
  Email = '';
  entidades = [];


  constructor(private tipoProdutorService: ProdutorService, private Auth: AuthService, private adminService: AdminService) { }

  ngOnInit() {

    const num = localStorage.length;

    if (num === 1) {
      this.Auth.getUserName().subscribe(
        data => this.Email = data.email.toString(),
        error => console.log('error')
      );
    }



    this.tipoProdutorService.getTipoProdutos()
    .subscribe(
      res => this.tipoProdutos = res,
      err => console.log(err)
    );

    this.tipoProdutorService.getLocais()
    .subscribe(
      res => this.locais = res,
      err => console.log(err)
    );

    this.adminService.getEntidades()
    .subscribe(
      res => this.entidades = res,
      err => console.log(err)
    );

  }

  criarProduto(event) {

    event.preventDefault();
    console.log(event);
    const target = event.target;
    const email = this.Email;
    const name = target.querySelector('#name').value;
    const stock = target.querySelector('#stock').value;
    const localTemp = target.querySelector('#local').value;
    const tipoProdutoTemp = target.querySelector('#tipoProduto').value;
    const dataInicio = target.querySelector('#dataInicio').value;
    const dataValidade = target.querySelector('#dataValidade').value;
    const preco = target.querySelector('#preco').value;
    const imagem = target.querySelector('#imagem').value;
    const entidadeTemp = target.querySelector('#entidadeProd').value;
    const numeroQualifica = target.querySelector('#numeroQualifica').value;

    const local: string[] = localTemp.split(' ');
    const tipoProduto: string[] = tipoProdutoTemp.split(' ');

    const localFinal = local[1];
    const tipoProdutoFinal = tipoProduto[1];

    const entidade: string[] = entidadeTemp.split(' ');
    const entidadeFinal = entidade[1];
    console.log(entidadeFinal);

    console.log(email);
    // tslint:disable-next-line: max-line-length
    this.tipoProdutorService.postProduto(email, name, stock, tipoProdutoFinal, localFinal, dataInicio, dataValidade, preco, imagem , numeroQualifica, entidadeFinal).subscribe(data => {
      if (data) {
        console.log(data);
        target.querySelector('#name').value = '';
        target.querySelector('#stock').value = '';
        target.querySelector('#tipoProduto').value = '';
        target.querySelector('#local').value = '';
        target.querySelector('#dataInicio').value = '';
        target.querySelector('#dataValidade').value = '';
        target.querySelector('#imagem').value = '';
        target.querySelector('#preco').value = '';
        target.querySelector('#entidadeProd').value = '';
        target.querySelector('#numeroQualifica').value = '';
      } else {
        console.log('error');
      }
     });
  }

}
