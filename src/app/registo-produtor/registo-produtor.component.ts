import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-registo-produtor',
  templateUrl: './registo-produtor.component.html',
  styleUrls: ['./registo-produtor.component.css']
})
export class RegistoProdutorComponent implements OnInit {

  constructor(private Auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  registarPro(event) {
    event.preventDefault();
    console.log(event);
    const target = event.target;
    const email = target.querySelector('#email').value;
    const user = target.querySelector('#user').value;
    const pass = target.querySelector('#pass').value;
    console.log(target);

    this.Auth.postProdutor(email, user, pass).subscribe(data => {
      /*if (data.success) {
        this.router.navigate(['login']);
      } else {
        console.log('ola');
      }*/
      if (data) {
        this.router.navigate(['login']);
        } else {
        console.log('error');
        }
     });
  }

}
