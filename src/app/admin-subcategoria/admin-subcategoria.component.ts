import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-subcategoria',
  templateUrl: './admin-subcategoria.component.html',
  styleUrls: ['./admin-subcategoria.component.css']
})
export class AdminSubcategoriaComponent implements OnInit {

  categorias = [];

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getCategoria()
    .subscribe(
      res => this.categorias = res,
      err => console.log(err)
    );
  }

  registarSub(event) {

    event.preventDefault();
    console.log(event);
    const target = event.target;
    const nome = target.querySelector('#nomeSub').value;
    const designacao = target.querySelector('#descSub').value;
    const categoriaTemp = target.querySelector('#cat').value;
    console.log(target);

    const categoriaSub: string[] = categoriaTemp.split(' ');
    const ecategoriaSubFinal = categoriaSub[1];


    this.adminService.postSubcategoria(ecategoriaSubFinal, nome, designacao).subscribe(data => {
      if (data) {
        console.log(data + 'good');
        target.querySelector('#nomeSub').value = '';
        target.querySelector('#descSub').value = '';
        target.querySelector('#cat').value = '';
      } else {
        console.log('error');
      }
     });

  }

}
