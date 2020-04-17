import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AdminService {

  // tslint:disable-next-line: variable-name
  private _localUrl = 'http://localhost:3000/local';

  // tslint:disable-next-line: variable-name
  private _ProdutorUrl = 'http://localhost:3000/produtor';

  constructor(private http: HttpClient) { }

  getClientes() {
    return this.http.get<any>('http://localhost:3000/users/clientes');
  }

  getProdutores() {
    return this.http.get<any>('http://localhost:3000/produtor');
  }

  getAdmins() {
    return this.http.get<any>('http://localhost:3000/users/admins');
  }

  getLocais() {
    return this.http.get<any>(this._localUrl);
  }

  deleteCliente(clienteid) {
    // psot details to http server
    return this.http.post<any>('http://localhost:3000/users/deleteOne', {
      clienteid,
    });
  }

  deleteProdutor(produtorId) {
    // psot details to http server
    return this.http.post<any>('http://localhost:3000/produtor/deleteOne', {
      produtorId,
    });
  }

  deleteAdmin(aminId) {
    // psot details to http server
    return this.http.post<any>('http://localhost:3000/users/deleteOne', {
      aminId,
    });
  }

  postProdutor(email, nome, nif, contacto, idLocal) {
    // psot details to http server
    return this.http.post<any>(this._ProdutorUrl, {
      email,
      nome,
      nif,
      contacto,
      idLocal
    });
  }

  postAdmin(email, nome, pass, contacto, local) {
    // psot details to http server
    return this.http.post<any>('http://localhost:3000/usersAd', {
      email,
      nome,
      pass,
      contacto,
      local
    });
  }

  postLocal(nome, distrito, codigopostal) {
    // psot details to http server
    return this.http.post<any>('http://localhost:3000/local', {
      nome,
      distrito,
      codigopostal
    });
  }

  postEntidade(nome, descricao) {
    // psot details to http server
    return this.http.post<any>('http://localhost:3000/entidadecertificacao', {
      nome,
      descricao
    });
  }

  getEntidades() {
    return this.http.get<any>('http://localhost:3000/entidadecertificacao');
  }

  postQualificacao(idEntidadeCerticadora, nome, descricao) {
    // psot details to http server
    return this.http.post<any>('http://localhost:3000/qualificacao', {
      idEntidadeCerticadora,
      nome,
      descricao
    });
  }

  // tslint:disable-next-line: variable-name
  editartprodutor(_id, idLocal, nome, contacto, nif) {
    return this.http.put<any>('http://localhost:3000/produtor/updadeProdutor', {
      _id,
      idLocal,
      nome,
      contacto,
      nif
    });

  }

  postCatggoria(nome, descricao) {
    // psot details to http server
    return this.http.post<any>('http://localhost:3000/categoria', {
      nome,
      descricao
    });
  }

  postSubcategoria(idCategoria, nome, designacao) {
    // psot details to http server
    return this.http.post<any>('http://localhost:3000/subcategoria', {
      idCategoria,
      nome,
      designacao
    });
  }

  getCategoria() {
    return this.http.get<any>('http://localhost:3000/categoria');
  }

  getSubCategoria() {
    return this.http.get<any>('http://localhost:3000/subcategoria');
  }

  getCertificacao() {
    return this.http.get<any>('http://localhost:3000/qualificacao');
  }

  postCertificacao(idSubcategoria, idQualificacao, nome, designacao) {
    // psot details to http server
    return this.http.post<any>('http://localhost:3000/tipoProduto', {
      idSubcategoria,
      idQualificacao,
      nome,
      designacao
    });
  }

  getTipoProduto() {
    return this.http.get<any>('http://localhost:3000/tipoProduto');
  }

  deleteEntidade(entitadeId) {
    return this.http.post<any>('http://localhost:3000/entidadecertificacao/deleteOne', {
      entitadeId,
    });
  }

  deleteLocal(locaId) {
    return this.http.post<any>('http://localhost:3000/local/deleteOne', {
      locaId,
    });
  }

  deleteCertificacao(certificacaoId) {
    return this.http.post<any>('http://localhost:3000/qualificacao/deleteOne', {
      certificacaoId,
    });
  }

  deleteCategoria(categoriaId) {
    return this.http.post<any>('http://localhost:3000/categoria/deleteOne', {
      categoriaId
    });
  }

  deleteSubCategoria(subCategoriaId) {
    return this.http.post<any>('http://localhost:3000/subcategoria/deleteOne', {
      subCategoriaId,
    });
  }

  deleteTipoProduto(tipoProdutoId) {
    return this.http.post<any>('http://localhost:3000/tipoProduto/deleteOne', {
      tipoProdutoId,
    });
  }


}
