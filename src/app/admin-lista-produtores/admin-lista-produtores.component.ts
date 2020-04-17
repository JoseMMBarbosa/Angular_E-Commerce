import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ProdutorService } from '../produtor.service';

// tslint:disable-next-line: class-name
interface prod {
  _id: string;
  nome: string;
  nif: string;
  idLocal: string;
}

@Component({
  selector: 'app-admin-lista-produtores',
  templateUrl: './admin-lista-produtores.component.html',
  styleUrls: ['./admin-lista-produtores.component.css']
})




export class AdminListaProdutoresComponent implements OnInit {

  clientes = [];
  produtores = [];
  admins = [];
  produtorEdit: prod;
  locais = [];

  constructor(private adminServise: AdminService, private tipoProdutorService: ProdutorService) { }

  ngOnInit() {

    this.adminServise.getClientes()
    .subscribe(
      res => this.clientes = res,
      err => console.log(err)
    );

    this.adminServise.getProdutores()
    .subscribe(
      res => this.produtores = res,
      err => console.log(err)
    );

    this.adminServise.getAdmins()
    .subscribe(
      res => this.admins = res,
      err => console.log(err)
    );

    this.tipoProdutorService.getLocais()
    .subscribe(
      res => this.locais = res,
      err => console.log(err)
    );

  }

  apagarCliente(cliente) {
    console.log(cliente._id);
    console.log(cliente.nome);
    const ClienteId = cliente._id;
    this.adminServise.deleteCliente(ClienteId).subscribe(data => {
      if (data) {
        console.log(data);
        this.adminServise.getClientes()
          .subscribe(
        res => this.clientes = res,
        err => console.log(err)
      );
      } else {
        console.log('error');
      }
     });
  }

  apagarProdutor(produtor) {
    console.log(produtor._id);
    console.log(produtor.nome);
    const produtorId = produtor._id;
    this.adminServise.deleteProdutor(produtorId).subscribe(data => {
      if (data) {
        console.log(data);
        this.adminServise.getProdutores()
          .subscribe(
        res => this.produtores = res,
        err => console.log(err)
      );
      } else {
        console.log('error');
      }
     });
  }

  apagarAdmin(admin) {
    console.log(admin._id);
    console.log(admin.nome);
    const adminId = admin._id;
    this.adminServise.deleteCliente(adminId).subscribe(data => {
      if (data) {
        console.log(data);
        this.adminServise.getAdmins()
          .subscribe(
        res => this.admins = res,
        err => console.log(err)
      );
      } else {
        console.log('merda');
      }
     });
  }

  actuliza() {
    this.adminServise.getClientes()
    .subscribe(
      res => this.clientes = res,
      err => console.log(err)
    );

    this.adminServise.getProdutores()
    .subscribe(
      res => this.produtores = res,
      err => console.log(err)
    );

    this.adminServise.getAdmins()
    .subscribe(
      res => this.admins = res,
      err => console.log(err)
    );
  }

  ola(produtor) {
    console.log(produtor);
    this.produtorEdit = produtor;
    console.log(this.produtorEdit);
    console.log(this.produtorEdit._id);
  }

  editarProdutor(event) {
    event.preventDefault();
    console.log(event);
    const target = event.target;
    // tslint:disable-next-line: variable-name
    const _idprod = this.produtorEdit._id;
    const nome = target.querySelector('#produtorNome').value;
    const nif = target.querySelector('#produtorNif').value;
    const contacto = target.querySelector('#produtorcontacto').value;
    const localTemp = target.querySelector('#Produtorlocal').value;

    const local: string[] = localTemp.split(' ');
    const localFinal = local[1];
    console.log(localFinal + ' localTemp'),
    console.log(localFinal + ' local'),

    console.log(target);

    this.adminServise.editartprodutor(_idprod, localFinal, nome , contacto , nif).subscribe( data => {
      if (data) {
        console.log(data + 'good');
        target.querySelector('#produtorNome').value = '';
        target.querySelector('#produtorNif').value = '';
        target.querySelector('#produtorcontacto').value = '';
        target.querySelector('#Produtorlocal').value = '';
        this.actuliza();
      } else {
        console.log('erro');
      }
     });
  }

}
