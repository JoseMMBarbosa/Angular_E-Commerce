import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  // tslint:disable-next-line: variable-name
  private _homeUrl = 'http://localhost:3000/loteproduto';

  constructor(private http: HttpClient) { }

  getProdutos() {
    return this.http.get<any>(this._homeUrl);
  }

  postProdutoTipo(idTipoProduto) {
    // psot details to http server
    return this.http.post<any>('http://localhost:3000/loteproduto/tipoProduto', {
      idTipoProduto
    });
  }

  getPesquisa(nome) {
    return this.http.post<any>('http://localhost:3000/loteproduto/nome', {
      nome
    });

  }

}
