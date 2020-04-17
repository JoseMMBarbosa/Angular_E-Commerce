import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Locais } from './locais';


@Injectable({
  providedIn: 'root'
})
export class ProdutorService {

  // tslint:disable-next-line: variable-name
  private _tipoProdutosUrl = 'http://localhost:3000/tipoProduto';
  // tslint:disable-next-line: variable-name
  private _localUrl = 'http://localhost:3000/local';

  // tslint:disable-next-line: variable-name
  private _produtoUrl = 'http://localhost:3000/loteproduto';

  constructor(private http: HttpClient) { }

  getTipoProdutos() {
    return this.http.get<any>(this._tipoProdutosUrl);
  }

  getLocais() {
    return this.http.get<any>(this._localUrl);
  }

  postProduto(email, nome, stock, idTipoProduto, idLocal, dataInicio, dataValidade, preco, imagem, numeroQualifica, idEntidade) {
    // psot details to http server
    return this.http.post<any>(this._produtoUrl, {
      email,
      nome,
      stock,
      idTipoProduto,
      idLocal,
      dataInicio,
      dataValidade,
      preco,
      imagem,
      numeroQualifica,
      idEntidade
    });
  }
  getProdutosProdutor(email) {
    return this.http.post<any>('http://localhost:3000/loteproduto/produtorProdutor', {
      email
    });
  }

  getVendasProdutor(email) {
    return this.http.post<any>('http://localhost:3000/linhaenc/linhaProdutor', {
      email
    });
  }

  getCompras(email) {
    return this.http.post<any>('http://localhost:3000/encomenda/encomendaCliente', {
      email
    });
  }

  deleteProduto(produtoId) {
    return this.http.post<any>('http://localhost:3000/loteproduto/deleteOne', {
      produtoId
    });
  }
}
