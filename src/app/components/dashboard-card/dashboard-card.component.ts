import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-card',
  standalone: true,
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.css']
})
export class DashboardCardComponent {
  @Input() icon: string = '';
  @Input() value: string = '';
  @Input() description: string = '';
}
