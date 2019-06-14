import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  mostrarMenu: boolean = false;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    )
  }

}
