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

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    ContentComponent,
    AboutComponent,
    FooterComponent,
    MoreAboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
