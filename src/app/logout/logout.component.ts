import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.logout();
  }

  logout() {
    this.dataService.updateUser('');
    this.dataService.updateStatus(false);
    localStorage.removeItem('token');
  }

}
