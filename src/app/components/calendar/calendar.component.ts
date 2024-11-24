import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface CalendarDay {
 date: number;
 isToday: boolean;
 isPrevMonth: boolean;
 isNextMonth: boolean;
 hasAppointment: boolean;
}

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule],//Incluir import do popup que será utilizado
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {
  months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];
  weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  currentMonth!: number;
  currentYear!: number;
  calendar: CalendarDay[][] = [];
  Day = new Date();

  mostrarPopup = false; // Estado do popup
  popupTitle = ''; // Título do popup
 // popupContent = ''; // Conteúdo do popup

  constructor() {
    const today = new Date();
    this.currentMonth = today.getMonth();
    this.currentYear = today.getFullYear();
    this.generateCalendar(this.currentYear, this.currentMonth);
  }

  abrirPopup(day: CalendarDay): void {
    this.popupTitle = `Agendamento para o dia ${day.date}`;
   // this.popupContent = `Você selecionou o dia ${day.date}.`;
    this.mostrarPopup = true;
  }

  fecharPopup(): void {
    this.mostrarPopup = false;
    this.popupTitle = '';
   // this.popupContent = '';
  }

  generateCalendar(year: number, month: number): void {
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const lastDateOfMonth = new Date(year, month + 1, 0).getDate();
    const lastDateOfPrevMonth = new Date(year, month, 0).getDate();

    const days: CalendarDay[] = [];
    const today = new Date();

    // Dias do mês anterior
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      days.push({
        date: lastDateOfPrevMonth - i,
        isToday: false,
        isPrevMonth: true,
        isNextMonth: false,
        hasAppointment: Math.floor(Math.random()*100) < 10
      });
    }

    // Dias do mês atual
    for (let i = 1; i <= lastDateOfMonth; i++) {
      days.push({
        date: i,
        isToday: today.getFullYear() === year && today.getMonth() === month && today.getDate() === i,
        isPrevMonth: false,
        isNextMonth: false,
        hasAppointment:  Math.floor(Math.random()*100) < 10 // Define aleatoriamente se terá agendamento
      });
    }

    // Dias do próximo mês
    const nextMonthDays = 42 - days.length; // Total de células na tabela
    for (let i = 1; i <= nextMonthDays; i++) {
      days.push({
        date: i,
        isToday: false,
        isPrevMonth: false,
        isNextMonth: true,
        hasAppointment:  Math.floor(Math.random()*100) < 10
      });
    }

    // Divida os dias em semanas
    this.calendar = [];
    for (let i = 0; i < days.length; i += 7) {
      this.calendar.push(days.slice(i, i + 7));
    }
  }

  prevMonth(): void {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.generateCalendar(this.currentYear, this.currentMonth);
  }

  nextMonth(): void {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.generateCalendar(this.currentYear, this.currentMonth);
  }
}
