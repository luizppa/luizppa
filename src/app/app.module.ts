import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubWidgetComponent } from './components/shared/github-widget/github-widget.component';
import { GithubStatComponent } from './components/shared/github-widget/github-stat/github-stat.component';
import { GithubNameComponent } from './components/shared/github-widget/github-name/github-name.component';
import { HomeComponent } from './pages/home/home.component';
import { ParallaxComponent } from './components/shared/parallax/parallax.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubWidgetComponent,
    GithubStatComponent,
    GithubNameComponent,
    HomeComponent,
    ParallaxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
