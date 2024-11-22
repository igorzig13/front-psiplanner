import {Component, Input, numberAttribute} from '@angular/core';
import {LinkComponent} from '../link/link.component';

export interface TextsAndLinks {
  texts: string[];
  links: string[];
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    LinkComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input({transform: numberAttribute}) navIndex : number = 1;

  navbars = new Map<number, TextsAndLinks>()
  texts: string[] | undefined = [];
  links: string[] | undefined = [];

  constructor() {

    const nav1 : TextsAndLinks = {
      texts: ['Sobre', 'Cadastre-se', 'Login'],
      links: ['/about', '/register', '/login']};

    const nav2 : TextsAndLinks = {
      texts: ['Início', 'Consultas', 'Calendário'],
      links: ['/home', '/appointments', '/calendar']};

    this.navbars.set(1, nav1);
    this.navbars.set(2, nav2);

    this.texts = this.navbars.get(this.navIndex)?.texts
    this.links = this.navbars.get(this.navIndex)?.links;

  }
}
