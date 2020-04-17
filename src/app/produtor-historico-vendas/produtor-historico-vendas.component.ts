import { Component, OnInit } from '@angular/core';
import { ProdutorService } from '../produtor.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-produtor-historico-vendas',
  templateUrl: './produtor-historico-vendas.component.html',
  styleUrls: ['./produtor-historico-vendas.component.css']
})
export class ProdutorHistoricoVendasComponent implements OnInit {

  vendas = [];

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
        console.log(data.email);
        this.produtorService.getVendasProdutor(data.email)
          .subscribe(
            res => this.vendas = res,
            err => console.log(err)
          );
      },
      error => console.log('error')
    );
  }

}
