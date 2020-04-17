import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-entidade',
  templateUrl: './admin-entidade.component.html',
  styleUrls: ['./admin-entidade.component.css']
})
export class AdminEntidadeComponent implements OnInit {

  constructor(private adminServise: AdminService) { }

  ngOnInit() {
  }

  registarEntidade(event) {

    event.preventDefault();
    console.log(event);
    const target = event.target;
    const nome = target.querySelector('#nomeEnt').value;
    const descricao = target.querySelector('#descEnt').value;
    console.log(target);

    this.adminServise.postEntidade(nome, descricao).subscribe(data => {
      if (data) {
        console.log(data + 'good');
        target.querySelector('#nomeEnt').value = '';
        target.querySelector('#descEnt').value = '';
      } else {
        console.log('error');
      }
     });
  }

}
