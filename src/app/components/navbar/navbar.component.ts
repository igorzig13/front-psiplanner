import {Component, Input, numberAttribute, SimpleChanges} from '@angular/core';
import {LinkComponent} from '../link/link.component';
import {RouterLink} from '@angular/router';

export interface TextsAndLinks {
  texts: string[];
  links: string[];
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    LinkComponent,
    RouterLink
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
      texts: ['Sobre', 'Cadastrar', 'Login'],
      links: ['/about', '/register', '/login']};

    const nav2 : TextsAndLinks = {
      texts: ['Início', 'Consultas', 'Calendário', 'Perfil', 'Sair'],
      links: ['/client', '/client/consultas', '/client/calendario', '/client/perfil', '']};

    const nav3 : TextsAndLinks = {
      texts: ['Inicio', 'Profissionais', 'Perfil', 'Sair'],
      links: ['/clinic', '/clinic/professionals', '/clinic/perfil', ''],
    };

    const nav4 : TextsAndLinks = {
      texts: ['Inicio', 'Calendário', 'Consultas', 'Agenda' ,'Perfil', 'Sair'],
      links: ['/professional', '/professional/calendar', '/professional/consults', "/professional/agenda" , "/professional/perfil", ''],
    };

    this.navbars.set(1, nav1);
    this.navbars.set(2, nav2);
    this.navbars.set(3, nav3);
    this.navbars.set(4, nav4);

    this.updateNavbar();

  }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['navIndex']) {
      this.updateNavbar();
    }
  }

  private updateNavbar() {
    const navbar = this.navbars.get(this.navIndex);
    if (navbar) {
      this.texts = navbar.texts;
      this.links = navbar.links;
    }
  }

}
