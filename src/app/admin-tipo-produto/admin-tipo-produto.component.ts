import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-tipo-produto',
  templateUrl: './admin-tipo-produto.component.html',
  styleUrls: ['./admin-tipo-produto.component.css']
})
export class AdminTipoProdutoComponent implements OnInit {

  locais = [];
  subCategorias = [];
  certificacoes = [];

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getSubCategoria()
    .subscribe(
      res => this.subCategorias = res,
      err => console.log(err)
    );

    this.adminService.getCertificacao()
    .subscribe(
      res => this.certificacoes = res,
      err => console.log(err)
    );
  }

  registarTipo(event) {

    event.preventDefault();
    console.log(event);
    const target = event.target;
    const nome = target.querySelector('#nomeTipo').value;
    const designacao = target.querySelector('#descTipo').value;
    const subTipoTemp = target.querySelector('#subTipo').value;
    const certTemp = target.querySelector('#certificacaoTipo').value;
    console.log(target);

    const cert: string[] = certTemp.split(' ');
    const certFinal = cert[1];

    const subTipo: string[] = subTipoTemp.split(' ');
    const subTipoFinal = subTipo[1];


    this.adminService.postCertificacao(subTipoFinal, certFinal, nome, designacao).subscribe(data => {
      if (data) {
        console.log(data + 'good');
        target.querySelector('#nomeTipo').value = '';
        target.querySelector('#descTipo').value = '';
        target.querySelector('#subTipo').value = '';
        target.querySelector('#certificacaoTipo').value = '';
      } else {
        console.log('error');
      }
     });

  }

}
