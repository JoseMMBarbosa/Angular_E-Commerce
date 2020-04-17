import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-categoria',
  templateUrl: './admin-categoria.component.html',
  styleUrls: ['./admin-categoria.component.css']
})
export class AdminCategoriaComponent implements OnInit {

  constructor(private adminServise: AdminService) { }

  ngOnInit() {
  }

  registarCategoria(event) {

    event.preventDefault();
    console.log(event);
    const target = event.target;
    const nome = target.querySelector('#nomeCat').value;
    const descricao = target.querySelector('#descCat').value;
    console.log(target);

    this.adminServise.postCatggoria(nome, descricao).subscribe(data => {
      if (data) {
        console.log(data + 'good');
        target.querySelector('#nomeCat').value = '';
        target.querySelector('#descCat').value = '';
      } else {
        console.log('error');
      }
     });
  }
}
