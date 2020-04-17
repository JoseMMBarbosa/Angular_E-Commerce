import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Auth: AuthService, private router: Router, private dataService: DataService) { }

  ngOnInit() {
  }

  login(event) {
    event.preventDefault();
    console.log(event);
    const target = event.target;
    const username = target.querySelector('#email').value;
    const password = target.querySelector('#password').value;
   // console.log(target);
   // console.log(username);
   // console.log(password);

    this.Auth.getUserDetails(username, password).subscribe(data => {
      if (data.success) {
        console.log(username, password);
        console.log(data.token);
        localStorage.setItem('token', data.token.toString());
        this.router.navigate(['home']);
        this.Auth.getUserName().subscribe(
          // tslint:disable-next-line: no-shadowed-variable
          data => {
            console.log(data);
            this.dataService.updateUser(data.user);
            this.dataService.updateStatus(true);
          },
          error => console.log('error')
        );
      } else {
        window.alert(data.message);
      }
     });
  }
}
