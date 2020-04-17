import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-criar-produtor',
  templateUrl: './admin-criar-produtor.component.html',
  styleUrls: ['./admin-criar-produtor.component.css']
})
export class AdminCriarProdutorComponent implements OnInit {

  locais = [];

  constructor(private adminService: AdminService) { }

  ngOnInit() {

    this.adminService.getLocais()
    .subscribe(
      res => this.locais = res,
      err => console.log(err)
    );

  }

  criarProdutor(event) {
    event.preventDefault();
    console.log(event);
    const target = event.target;
    const email = target.querySelector('#email').value;
    const name = target.querySelector('#name').value;
    const nif = target.querySelector('#nif').value;
    const contacto = target.querySelector('#contacto').value;
    const localTemp = target.querySelector('#local').value;

    const local: string[] = localTemp.split(' ');

    const localFinal = local[1];
    console.log(email);
    // tslint:disable-next-line: max-line-length
    this.adminService.postProdutor(email, name, nif, contacto, localFinal).subscribe(data => {
      if (data) {
        console.log(data);
        target.querySelector('#email').value = '';
        target.querySelector('#name').value = '';
        target.querySelector('#nif').value = '';
        target.querySelector('#contacto').value = '';
        target.querySelector('#local').value = '';
      } else {
        console.log('error');
      }
     });


  }

}
