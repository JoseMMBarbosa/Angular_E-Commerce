import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-qualificacao',
  templateUrl: './admin-qualificacao.component.html',
  styleUrls: ['./admin-qualificacao.component.css']
})
export class AdminQualificacaoComponent implements OnInit {

  entidades = [];

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getEntidades()
    .subscribe(
      res => this.entidades = res,
      err => console.log(err)
    );
  }

  registarQualificacao(event) {

    event.preventDefault();
    console.log(event);
    const target = event.target;
    const nome = target.querySelector('#nomeQual').value;
    const distrito = target.querySelector('#descQual').value;
    const entidadeQualTemp = target.querySelector('#entidadeQual').value;
    console.log(target);

    const entidadeQual: string[] = entidadeQualTemp.split(' ');
    const entidadeQualFinal = entidadeQual[1];


    this.adminService.postQualificacao(entidadeQualFinal, nome, distrito).subscribe(data => {
      if (data) {
        console.log(data + 'good');
        target.querySelector('#nomeQual').value = '';
        target.querySelector('#descQual').value = '';
        target.querySelector('#entidadeQual').value = '';
      } else {
        console.log('error');
      }
     });
  }

}
