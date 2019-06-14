import { Usuario } from './../../model/usuario.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Route, Router } from '@angular/router';

@Injectable()
export class AuthService {

  private usuarioAutenticado: boolean = false;
  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){
    if(usuario.nome === "duaraujo" && usuario.senha === "12345"){
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['/']);
    }else{
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
    }
  }

}
