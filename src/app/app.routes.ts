import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { WhyUsComponent } from './pages/why-us/why-us.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ClinicHomeComponent } from './pages/clinic-home/clinic-home.component';
import { ClinicProfessionalsComponent } from './pages/clinic-professionals/clinic-professionals.component';
import { ClinicPerfilComponent } from './pages/clinic-perfil/clinic-perfil.component';
<<<<<<< HEAD
import { ClientPerfilComponent } from './pages/client-perfil/client-perfil.component';
import { ClientHomepageComponent } from './pages/client-homepage/client-homepage.component';
import { CalendarComponent } from './components/calendar/calendar.component';
=======
import { ProfessionalHomeComponent } from './pages/professional-home/professional-home.component';
import { ProfessionalConsultsComponent } from './pages/professional-consults/professional-consults.component';
import { ProfessionalPerfilComponent } from './pages/professional-perfil/professional-perfil.component';
import { ProfessionalCalendarComponent } from './pages/professional-calendar/professional-calendar.component';
>>>>>>> origin/feat_professional_pages

export const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'about', component: AboutComponent },
  { path: 'why-us', component: WhyUsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'clinic', component: ClinicHomeComponent },
  { path: 'clinic/professionals', component: ClinicProfessionalsComponent },
  { path: 'clinic/perfil', component: ClinicPerfilComponent },
<<<<<<< HEAD
  { path: 'client', component: ClientHomepageComponent},
  { path: 'client/perfil', component: ClientPerfilComponent },
  { path: 'cliente/calendario', component: CalendarComponent },
=======
  { path: 'professional', component: ProfessionalHomeComponent },
  { path: 'professional/consults', component: ProfessionalConsultsComponent },
  { path: 'professional/perfil', component: ProfessionalPerfilComponent },
  { path: 'professional/calendar', component: ProfessionalCalendarComponent }
>>>>>>> origin/feat_professional_pages
];
