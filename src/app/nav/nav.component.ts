import { Component, OnInit } from '@angular/core';
import { Router, ɵangular_packages_router_router_o } from '@angular/router';
import { AuthService } from '../auth.service';
import { HomeService } from '../home.service';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router: Router, private Auth: AuthService, private dataService: DataService) { }

  nome: string;
  ninguem = '';

  userSatus$: boolean;

  ngOnInit() {
    const num = localStorage.length;

    this.dataService.correntUser.subscribe(nome => this.nome = nome);

    if (num === 1) {
      this.getStatus();
      this.dataService.updateStatus(true);
      this.Auth.getUserName().subscribe(
        data => this.nome = data.user.toString(),
        error => console.log('error')

      );
    } else {
      this.dataService.correntUser.subscribe(nome => this.nome = nome);
    }
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/logout']);
    this.dataService.updateUser('');
  }

  getStatus() {
    this.dataService.correnteUserStatus.subscribe(userSatus => {
    this.userSatus$ = userSatus;
    console.log(userSatus);
    });
  }


}
