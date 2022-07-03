import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './commponents/home-page/home-page.component';
import { HeaderComponent } from './commponents/header/header.component';
import { ContentComponent } from './commponents/content/content.component';
import { AboutComponent } from './commponents/about/about.component';
import { FooterComponent } from './commponents/footer/footer.component';
import { LoginComponent } from './commponents/login/login.component';
import { SignUpComponent } from './commponents/sign-up/sign-up.component';
import { DocPageComponent } from './commponents/doc-page/doc-page.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ForgetPasswordComponent } from './commponents/forget-password/forget-password.component';
import { PatientPageComponent } from './commponents/patient-page/patient-page.component';
import { AuthService } from 'src/app/services/auth.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from 'src/app/services/token-interceptor.service';
import { PharmacyPageComponent } from './commponents/pharmacy-page/pharmacy-page.component';
import { TestsPageComponent } from './commponents/tests-page/tests-page.component';
import { XRaysPageComponent } from './commponents/x-rays-page/x-rays-page.component';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: 'content',
    component: HomePageComponent,
  },
  {
    path: 'about',
    component: HomePageComponent,
  },
];
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    ContentComponent,
    AboutComponent,
    FooterComponent,
    LoginComponent,
    SignUpComponent,
    DocPageComponent,
    ForgetPasswordComponent,
    PatientPageComponent,
    PharmacyPageComponent,
    TestsPageComponent,
    XRaysPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
    }),
  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
