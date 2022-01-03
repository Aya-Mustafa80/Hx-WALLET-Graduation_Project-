import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './commponents/home-page/home-page.component';
import { HeaderComponent } from './commponents/header/header.component';
import { ContentComponent } from './commponents/content/content.component';
import { AboutComponent } from './commponents/about/about.component';
import { FooterComponent } from './commponents/footer/footer.component';
import { MoreAboutComponent } from './commponents/more-about/more-about.component';
import { LoginComponent } from './commponents/login/login.component';
import { SignUpComponent } from './commponents/sign-up/sign-up.component';
import { DocPageComponent } from './commponents/doc-page/doc-page.component';
import { PharmacyPageComponent } from './commponents/pharmacy-page/pharmacy-page.component';
import { LabsPageComponent } from './commponents/labs-page/labs-page.component';
import { SignUpDocComponent } from './commponents/sign-up-doc/sign-up-doc.component';
import { SignUpPatienComponent } from './commponents/sign-up-patien/sign-up-patien.component';
import { SignUpLabTestComponent } from './commponents/sign-up-lab-test/sign-up-lab-test.component';
import { SignUpLabXRayComponent } from './commponents/sign-up-lab-xray/sign-up-lab-xray.component';
import { SignUpPharmacyComponent } from './commponents/sign-up-pharmacy/sign-up-pharmacy.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    ContentComponent,
    AboutComponent,
    FooterComponent,
    MoreAboutComponent,
    LoginComponent,
    SignUpComponent,
    DocPageComponent,
    PharmacyPageComponent,
    LabsPageComponent,
    SignUpDocComponent,
    SignUpPatienComponent,
    SignUpLabTestComponent,
    SignUpLabXRayComponent,
    SignUpPharmacyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
