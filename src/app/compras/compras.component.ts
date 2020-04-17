import { Component, OnInit } from '@angular/core';
import { ProdutorService } from '../produtor.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

  compras = [];

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
        this.produtorService.getCompras(data.email)
          .subscribe(
            res => this.compras = res,
            err => console.log(err)
          );
      },
      error => console.log('error')
    );
  }

}
