import { Usuario } from './../../model/usuario.model';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  public logar(){
    this.auth.fazerLogin(this.usuario);
  }

}
