import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { WhyUsComponent } from './pages/why-us/why-us.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ClinicHomeComponent } from './pages/clinic-home/clinic-home.component';
import { ClinicProfessionalsComponent } from './pages/clinic-professionals/clinic-professionals.component';
import { ClinicPerfilComponent } from './pages/clinic-perfil/clinic-perfil.component';
import { ClientPerfilComponent } from './pages/client-perfil/client-perfil.component';
import { ClientCalendarioConsultaAgendadaComponent } from './pages/client-calendario-consulta-agendada/client-calendario-consulta-agendada.component';
import { ClientHomepageComponent } from './pages/client-homepage/client-homepage.component';
import { ProfessionalHomeComponent } from './pages/professional-home/professional-home.component';
import { ProfessionalConsultsComponent } from './pages/professional-consults/professional-consults.component';
import { ProfessionalPerfilComponent } from './pages/professional-perfil/professional-perfil.component';
import { ProfessionalCalendarComponent } from './pages/professional-calendar/professional-calendar.component';
import { ClientCalendarioConsultaRealizadaComponent } from './pages/client-calendario-consulta-realizada/client-calendario-consulta-realizada.component';
import { ClientConsultsComponent } from './pages/client-consults/client-consults.component';
import { ProfessionalScheduleComponent } from './pages/professional-schedule/professional-schedule.component';
import { ClientCalendarComponent } from './components/client-calendar/client-calendar.component';

export const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'about', component: AboutComponent },
  { path: 'why-us', component: WhyUsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'clinic', component: ClinicHomeComponent },
  { path: 'clinic/professionals', component: ClinicProfessionalsComponent },
  { path: 'clinic/perfil', component: ClinicPerfilComponent },
  { path: 'client', component: ClientHomepageComponent},
  { path: 'client/perfil', component: ClientPerfilComponent },
  { path: 'client/consultas', component: ClientConsultsComponent},
  { path: 'client/calendario', component: ClientCalendarComponent },
  { path: 'client/calendario/agendadas', component:ClientCalendarioConsultaAgendadaComponent },
  { path: 'client/calendario/realizadas', component:ClientCalendarioConsultaRealizadaComponent },
  { path: 'professional', component: ProfessionalHomeComponent },
  { path: 'professional/consults', component: ProfessionalConsultsComponent },
  { path: 'professional/perfil', component: ProfessionalPerfilComponent },
  { path: 'professional/calendar', component: ProfessionalCalendarComponent },
  { path: 'professional/agenda', component: ProfessionalScheduleComponent }
];
