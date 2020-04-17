import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

interface prodCart {
  _id: string;
  nome: string;
  preco: string;
  quantidade: string;
}

interface enc {
  _id: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  produtosCarrinho = [];

  Status: boolean;

  private prodDataSource = new  BehaviorSubject<string>('');
  prodData = this.prodDataSource.asObservable();

  private userStatus = new BehaviorSubject<boolean>(false);
  correnteUserStatus = this.userStatus.asObservable();

  private nomeUser = new  BehaviorSubject<string>('');
  correntUser = this.nomeUser.asObservable();

  constructor(private http: HttpClient) { }

  updateUser(newUSer) {
    this.nomeUser.next(newUSer);
  }

  updateStatus(status) {
    this.userStatus.next(status);
  }

  addToCart(nomeproduto) {
    this.prodDataSource.next(nomeproduto);
  }

  addprodcarrinho(produto) {
    this.produtosCarrinho.push(produto);
  }

  checK() {
    console.log(this.produtosCarrinho);
  }

  getProdutos() {
    return this.produtosCarrinho;
  }

  postLinha(email, idEncomenda, produto) {
    // psot details to http server
    return this.http.post<any>('http://localhost:3000/linhaenc', {
      email,
      idEncomenda,
      produto
    });
  }

  postEncomenda(email, total, precociva) {
    return this.http.post<enc>('http://localhost:3000/encomenda', {
      email,
      total,
      precociva
    });

  }

  editarproduto(produto) {
    return this.http.put<any>('http://localhost:3000/loteproduto/updateProduto', {
      produto
    });
  }

  apagarCarinho() {
    while (this.produtosCarrinho.length > 0) {
      this.produtosCarrinho.pop();
  }
  }


}
