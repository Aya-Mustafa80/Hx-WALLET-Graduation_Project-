import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
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
import { LoginServiceService } from './services/login-service.service';
import { HttpClientModule } from '@angular/common/http';
import { ForgetPasswordComponent } from './commponents/forget-password/forget-password.component';

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
    ForgetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LoginServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
