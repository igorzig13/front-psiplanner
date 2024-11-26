import { Component } from '@angular/core';

@Component({
  selector: 'app-scheduler',
  standalone: true,
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent {
  days: string[] = ['SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB', 'DOM'];
  times: string[] = [
    '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM',
    '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'
  ];

  schedule: { [key: string]: boolean[] } = {};

  constructor() {
    this.initializeSchedule();
  }

  initializeSchedule(): void {
    this.times.forEach((time) => {
      this.schedule[time] = Array(this.days.length).fill(false);
    });

    this.times.forEach((time, timeIndex) => {
      if (timeIndex >= 2) {
        for (let dayIndex = 0; dayIndex <= 4; dayIndex++) {
          this.schedule[time][dayIndex] = true;
        }
      }
    });
  }

  toggleAvailability(time: string, dayIndex: number): void {
    this.schedule[time][dayIndex] = !this.schedule[time][dayIndex];
  }
}
