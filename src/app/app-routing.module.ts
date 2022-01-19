import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAllComponent } from './components/dashboard-all/dashboard-all.component';
import { DashboardSettingsComponent } from './components/dashboard-settings/dashboard-settings.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: SignInComponent},
  { path: 'signup', component: SignUpComponent},
  { path: 'dashboard', component: DashboardAllComponent},
  { path: 'settings', component: DashboardSettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
