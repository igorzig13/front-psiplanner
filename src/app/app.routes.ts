import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { WhyUsComponent } from './pages/why-us/why-us.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CalendarioComponent } from './pages/calendario/calendario.component'
import { CalendarComponent } from './components/calendar/calendar.component';

export const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'about', component: WhyUsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'client/calendario', component: CalendarioComponent },
  { path: 'client/calendario2', component: CalendarComponent },
  
];
