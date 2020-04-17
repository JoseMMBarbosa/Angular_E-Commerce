import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-admin-local',
  templateUrl: './admin-local.component.html',
  styleUrls: ['./admin-local.component.css']
})
export class AdminLocalComponent implements OnInit {

  myForm: FormGroup;

  constructor(private adminService: AdminService) {
  }



  ngOnInit() {
  }


  registarLocal(event) {

    event.preventDefault();
    console.log(event);
    const target = event.target;
    const nome = target.querySelector('#nomel').value;
    const distrito = target.querySelector('#distrito').value;
    const codigopostal = target.querySelector('#codigopostal').value;
    console.log(target);

    this.adminService.postLocal(nome, distrito, codigopostal).subscribe(data => {
      if (data) {
        console.log(data + 'good');
        target.querySelector('#nomel').value = '';
        target.querySelector('#distrito').value = '';
        target.querySelector('#codigopostal').value = '';
      } else {
        console.log('error');
      }
     });
  }
}
