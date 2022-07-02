import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './commponents/home-page/home-page.component';
import { LoginComponent } from './commponents/login/login.component';
import { SignUpComponent } from './commponents/sign-up/sign-up.component';
import { DocPageComponent } from './commponents/doc-page/doc-page.component';
import { ForgetPasswordComponent } from './commponents/forget-password/forget-password.component';
import { PatientPageComponent } from './commponents/patient-page/patient-page.component';
import { PharmacyPageComponent } from './commponents/pharmacy-page/pharmacy-page.component';
import { TestsPageComponent } from './commponents/tests-page/tests-page.component';
import { XRaysPageComponent } from './commponents/x-rays-page/x-rays-page.component';
import { AuthGuard } from './auth.guard';
import { AboutComponent } from './commponents/about/about.component';
const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomePageComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Signup', component: SignUpComponent },
  { path: 'forget_pass', component: ForgetPasswordComponent },
  { path: 'Patient_page', component: PatientPageComponent },
  { path: 'Doc_page', component: DocPageComponent },
  { path: 'Pharmacy_page', component: PharmacyPageComponent },
  { path: 'Tests_page', component: TestsPageComponent },
  { path: 'XRays_page', component: XRaysPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
