import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';

export interface CalendarDay {
 date: number;
 isToday: boolean;
 isPrevMonth: boolean;
 isNextMonth: boolean;
 hasEvent: boolean;
}

export interface CalendarDate {
  day: number;
  month: number;
  year: number;
  fullName: string;
  monthName: string;
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

  @Input() eventText: string = 'Disponível';
  @Input() type: 'agendamentos' | 'horarios' = 'horarios';
  @Output() onClick = new EventEmitter<CalendarDate>();

  constructor() {
    const today = new Date();
    this.currentMonth = today.getMonth();
    this.currentYear = today.getFullYear();
    this.generateCalendar(this.currentYear, this.currentMonth);
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
        hasEvent: false
      });
    }

    // Dias do mês atual
    for (let i = 1; i <= lastDateOfMonth; i++) {
      days.push({
        date: i,
        isToday: today.getFullYear() === year && today.getMonth() === month && today.getDate() === i,
        isPrevMonth: false,
        isNextMonth: false,
        hasEvent: false
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
        hasEvent: false
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

  /**
   * Indicates if the day is earlier than today
   * @param day
   */
  earlierThanToday(day: CalendarDay): boolean {
    return (day.date <= this.Day.getDate()) &&
      this.currentMonth<=this.Day.getMonth() && this.currentYear<=this.Day.getFullYear() &&
      !day.isNextMonth
  }

  laterThanToday(day: CalendarDay): boolean {
    return (day.hasEvent && day.date > this.Day.getDate() && !day.isPrevMonth && this.currentMonth>=this.Day.getMonth()) ||
      (day.hasEvent && this.currentMonth > this.Day.getMonth() ) ||
      (day.hasEvent && this.currentYear>this.Day.getFullYear())
  }

  getDateFromClick(day: CalendarDay): CalendarDate {
    let year = this.currentYear;
    let month = this.currentMonth;

    if (day.isPrevMonth) {
      if (month === 0){
        month = 11;
        year--;
      } else {
        month--;
      }
    }

    if (day.isNextMonth) {
      if (month === 11){
        month = 0;
        year++;
      } else {
        month++;
      }
    }

    return {
      day: day.date,
      month: month,
      year: year,
      monthName: this.months[month],
      fullName: day.date + ' de ' + this.months[month] + ' de ' + year
    };
  }
}
