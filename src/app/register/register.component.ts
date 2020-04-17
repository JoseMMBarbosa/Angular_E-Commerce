import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(private Auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  log(x) {
    console.log(x);
  }

  registarCli(event) {
    event.preventDefault();
    console.log(event);
    const target = event.target;
    const email = target.querySelector('#email').value;
    const user = target.querySelector('#user').value;
    const pass = target.querySelector('#pass').value;
    const nome = target.querySelector('#name').value;
    const contacto = target.querySelector('#contacto').value;
    const localidade = target.querySelector('#localidade').value;
    const morada = target.querySelector('#morada').value;
    const nif = target.querySelector('#nif').value;
    console.log(target);
    console.log(email);
    console.log(pass);

    this.Auth.postCliente(email, user, pass, nome, localidade, morada, nif, contacto).subscribe(data => {
      if (data.success) {
        this.router.navigate(['login']);
      } else {
        window.alert(data.message);
      }
     });
    // console.log(username, password);
  }

}
