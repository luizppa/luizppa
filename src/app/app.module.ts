import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubWidgetComponent } from './components/shared/github-widget/github-widget.component';
import { GithubStatComponent } from './components/shared/github-widget/github-stat/github-stat.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubWidgetComponent,
    GithubStatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
