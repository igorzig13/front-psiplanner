import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarDate } from '../calendar/calendar.component';

@Component({
  selector: 'app-daily-scheduler',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './daily-scheduler.component.html',
  styleUrl: './daily-scheduler.component.css'
})
export class DailySchedulerComponent {
  @Input() day: CalendarDate = { day: 0, month: 0, year: 0, monthName: '', fullName: '' };
  @Output() onSelectHour = new EventEmitter<string>();

  hours: string[] = [
    '7 AM', '8 AM', '9 AM', '10 AM', '11 AM',
    '12 PM', '1 PM', '2 PM', '3 PM', '4 PM',
    '5 PM', '6 PM', '7 PM'
  ];

  availability: { [hour: string]: boolean } = {
    '11 AM': true,
    '7 AM': true,
    '1 PM': true
  };

  selectedHour: string | null = null;

  isAvailable(hour: string): boolean {
    return this.availability[hour] || false;
  }

  selectHour(hour: string): void {
    if (!this.isAvailable(hour)) {
      return;
    }
    this.selectedHour = hour;
    this.onSelectHour.emit(hour);
  }
}
