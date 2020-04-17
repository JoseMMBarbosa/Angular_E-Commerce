import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  entidades = [];

  locais = [];

  qualificacoes = [];

  categorias = [];

  subCategorias = [];

  tipoProdutos = [];

  constructor(private adminService: AdminService) { }

  ngOnInit() {

    this.getEntidades();
    this.getLocais();
    this.getqualificacoes();
    this.getCategorias();
    this.getSubcats();
    this.getTipoProduto();

  }

  getEntidades() {
    this.adminService.getEntidades()
      .subscribe(
        res => this.entidades = res,
        err => console.log(err)
      );
  }

  getLocais() {
    this.adminService.getLocais()
      .subscribe(
        res => this.locais = res,
        err => console.log(err)
      );

  }

  getqualificacoes() {
    this.adminService.getCertificacao()
      .subscribe(
        res => this.qualificacoes = res,
        err => console.log(err)
      );

  }

  getCategorias() {
    this.adminService.getCategoria()
      .subscribe(
        res => this.categorias = res,
        err => console.log(err)
      );

  }

  getSubcats() {
    this.adminService.getSubCategoria()
      .subscribe(
        res => this.subCategorias = res,
        err => console.log(err)
      );

  }

  getTipoProduto() {
    this.adminService.getTipoProduto()
      .subscribe(
        res => this.tipoProdutos = res,
        err => console.log(err)
      );

  }

  actuliza() {
    this.getEntidades();
    this.getLocais();
    this.getqualificacoes();
    this.getSubcats();
    this.getCategorias();
    this.getTipoProduto();
  }

  apagarLocal(local) {
    console.log(local._id);
    console.log(local.nome);
    const localId = local._id;
    this.adminService.deleteLocal(localId).subscribe(data => {
      if (data) {
        console.log(data);
        this.actuliza();
      } else {
        console.log('error');
      }
    });
  }

  apagarEntidade(entidade) {
    console.log(entidade._id);
    console.log(entidade.nome);
    const entidaderId = entidade._id;
    this.adminService.deleteEntidade(entidaderId).subscribe(data => {
      if (data) {
        console.log(data);
        this.actuliza();
      } else {
        console.log('error');
      }
    });
  }

  apagarQualificacao(qualicacao) {
    console.log(qualicacao._id);
    console.log(qualicacao.nome);
    const qualicacaoId = qualicacao._id;
    this.adminService.deleteCertificacao(qualicacaoId).subscribe(data => {
      if (data) {
        console.log(data);
        this.actuliza();
      } else {
        console.log('error');
      }
    });
  }

  apagarCategorias(categoria) {
    console.log(categoria._id);
    console.log(categoria.nome);
    const categoriaId = categoria._id;
    this.adminService.deleteCategoria(categoriaId).subscribe(data => {
      if (data) {
        console.log(data);
        this.actuliza();
      } else {
        console.log('error');
      }
    });
  }

  apagarSubCat(subCat) {
    console.log(subCat._id);
    console.log(subCat.nome);
    const subCatId = subCat._id;
    this.adminService.deleteSubCategoria(subCatId).subscribe(data => {
      if (data) {
        console.log(data);
        this.actuliza();
      } else {
        console.log('error');
      }
    });
  }

  apagarTipoProduto(tipoProduto) {
    console.log(tipoProduto._id);
    console.log(tipoProduto.nome);
    const tipoProdutoId = tipoProduto._id;
    this.adminService.deleteTipoProduto(tipoProdutoId).subscribe(data => {
      if (data) {
        console.log(data);
        this.actuliza();
      } else {
        console.log('error');
      }
    });
  }

}
