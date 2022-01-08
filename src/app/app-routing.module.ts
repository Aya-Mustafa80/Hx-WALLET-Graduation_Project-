import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './commponents/home-page/home-page.component';
import { LoginComponent } from './commponents/login/login.component';
import { SignUpComponent } from './commponents/sign-up/sign-up.component';
import { DocPageComponent } from './commponents/doc-page/doc-page.component';
import { LabsPageComponent } from './commponents/labs-page/labs-page.component';
import { PharmacyPageComponent } from './commponents/pharmacy-page/pharmacy-page.component';
import { ForgetPasswordComponent } from './commponents/forget-password/forget-password.component';
import { SignUpDocComponent } from './commponents/sign-up-doc/sign-up-doc.component';
import { SignUpLabTestComponent } from './commponents/sign-up-lab-test/sign-up-lab-test.component';
import { SignUpLabXRayComponent } from './commponents/sign-up-lab-xray/sign-up-lab-xray.component';
import { SignUpPatienComponent } from './commponents/sign-up-patien/sign-up-patien.component';
import { SignUpPharmacyComponent } from './commponents/sign-up-pharmacy/sign-up-pharmacy.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomePageComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Signup', component: SignUpComponent },
  { path: 'forget pass', component: ForgetPasswordComponent },
  { path: 'SignDoc', component: SignUpDocComponent },
  { path: 'Signlabtest', component: SignUpLabTestComponent },
  { path: 'SignlabXray', component: SignUpLabXRayComponent },
  { path: 'Signpatient', component: SignUpPatienComponent },
  { path: 'Signpharmacy', component: SignUpPharmacyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
