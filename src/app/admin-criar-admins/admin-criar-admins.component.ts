import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-criar-admins',
  templateUrl: './admin-criar-admins.component.html',
  styleUrls: ['./admin-criar-admins.component.css']
})
export class AdminCriarAdminsComponent implements OnInit {

  locais = [];

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getLocais()
    .subscribe(
      res => this.locais = res,
      err => console.log(err)
    );
  }

  criarAdmin(event) {
    event.preventDefault();
    console.log(event);
    const target = event.target;
    const email = target.querySelector('#adminemail').value;
    const name = target.querySelector('#adminname').value;
    const pass = target.querySelector('#adminpass').value;
    const contacto = target.querySelector('#admincontacto').value;
    const localTemp = target.querySelector('#adminlocal').value;

    const local: string[] = localTemp.split(' ');

    const localFinal = local[1];
    console.log(email);
    // tslint:disable-next-line: max-line-length
    this.adminService.postAdmin(email, name, pass, contacto, localFinal).subscribe(data => {
      if (data) {
        console.log(data);
        target.querySelector('#adminemail').value = '';
        target.querySelector('#adminname').value = '';
        target.querySelector('#adminpass').value = '';
        target.querySelector('#admincontacto').value = '';
        target.querySelector('#adminlocal').value = '';
      } else {
        console.log('error');
      }
     });
  }
}
