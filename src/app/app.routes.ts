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

export const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'about', component: AboutComponent },
  { path: 'why-us', component: WhyUsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'clinic', component: ClinicHomeComponent },
  { path: 'clinic/professionals', component: ClinicProfessionalsComponent },
  { path: 'clinic/perfil', component: ClinicPerfilComponent },
  { path: 'client/perfil', component: ClientPerfilComponent },
  { path: 'client/calendario/agendadas', component:ClientCalendarioConsultaAgendadaComponent },
];
