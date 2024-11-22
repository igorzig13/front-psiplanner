import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { SafeHtmlPipe } from './safehtml';

@Component({
  selector: 'app-calendario',
  standalone: true, //SafeHtml importado para usar no template
  imports: [CommonModule, SafeHtmlPipe],
  templateUrl: './calendario.component.html',
  styleUrl: './calendario.component.css',
  encapsulation: ViewEncapsulation.None, //Necessário para carregar o CSS própriamente
})
export class CalendarioComponent {
  //Mapea as variáveis para colocar os dias no calendário
  daysOfWeek = ['SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB', 'DOM'];
  //Matriz de semanas ([semana][diaDaSemana])
  daysOfMonth: string[][] = [];

  constructor() {
    this.generateDaysOfMonth();
  }

  //Random para gerar o agendamento em um local aleatório
  getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
  }

  generateDaysOfMonth(): void {
    //Declara 35 dias pois é o tamanho total do calendário com os dias do outro mês
    const totalDays = 35;
    const daysArray = Array.from({ length: totalDays }, (_, i) => i + 1); // Gera [1, 2, ..., totalDays]
    const today = new Date();

    while (daysArray.length) {
      // Agrupa os dias em semanas (7 dias por semana)
      const week = daysArray.splice(0, 7);
      this.daysOfMonth.push(
        week.map((day) => {
          //Retornar os primeiros dias do próximo mês
          if (day > 30) {
            return `<div class="agendamento "><p>${day - 30}</p></div>`;
          }

          if(day==today.getDate()){
            return `<div class="agendamento "><p class="hoje">${day}</p><a href="#">Agendamento</a></div>`;
          }
          // Adiciona um agendamento com uma chance de 10% para algum dia da semana
          else if (this.getRandomInt(100) < 10) {
            if(day<today.getDate()){
              return `<div class="agendamento "><p>${day}</p><a href="#">Agendamento</a></div>`;
            }else{
              return `<div class="agendamento2 "><p>${day}</p><a href="#">Agendamento</a></div>`;
            }
          }
          //Retorna um dia sem um agendamento
          return `<div class="agendamento "><p>${day}</p></div>`;
        })
      );
    }
  }
}
