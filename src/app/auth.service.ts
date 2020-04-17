import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

// tslint:disable-next-line: class-name
interface myDAta {
  success: boolean;
  message: string;
  token: string;
}

// tslint:disable-next-line: class-name
interface token {
  user: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getUserDetails(email, pass) {
    // psot details to http server
    return this.http.post<myDAta>('http://localhost:3000/login', {
      email,
      pass
    });
    // .subscribe(data => {
    // console.log(data, 'top');
    // });
  }


  postCliente(email, user, pass, nome, localidade, morada, nif, contacto) {
    // psot details to http server
    return this.http.post<any>('http://localhost:3000/usersCliente', {
      email,
      user,
      pass,
      nome,
      localidade,
      morada,
      nif,
      contacto
    });
  }
  postProdutor(email, user, pass) {
    // psot details to http server
    return this.http.post<any>('http://localhost:3000/usersProdutor', {
      email,
      user,
      pass
    });
  }
  getUserName() {
   return this.http.get<token>('http://localhost:3000/data', {
     observe: 'body',
     params: new HttpParams().append('token', localStorage.getItem('token'))
   });
  }
}
