import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { WhyUsComponent } from './pages/why-us/why-us.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'about', component: AboutComponent },
  { path: 'why-us', component: WhyUsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];
