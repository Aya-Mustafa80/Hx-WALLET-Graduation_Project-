import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './commponents/home-page/home-page.component';
import { LoginComponent } from './commponents/login/login.component';
import { SignUpComponent } from './commponents/sign-up/sign-up.component';
import { DocPageComponent } from './commponents/doc-page/doc-page.component';
import { ForgetPasswordComponent } from './commponents/forget-password/forget-password.component';
import { PatientPageComponent } from './commponents/patient-page/patient-page.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomePageComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Signup', component: SignUpComponent },
  { path: 'forget_pass', component: ForgetPasswordComponent },
  { path: 'Patient_page', component: PatientPageComponent,canActivate:[AuthGuard] },
  { path: 'Doc_Page', component: DocPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
