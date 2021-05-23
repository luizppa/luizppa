import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { GithubWidgetComponent } from './components/shared/github-widget/github-widget.component';
import { GithubStatComponent } from './components/shared/github-widget/github-stat/github-stat.component';
import { GithubNameComponent } from './components/shared/github-widget/github-name/github-name.component';
import { HomeComponent } from './pages/home/home.component';
import { ParallaxComponent } from './components/shared/parallax/parallax.component';
import { ThumbnailComponent } from './components/shared/thumbnail/thumbnail.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { GithubRepoWidgetComponent } from './components/shared/github-repo-widget/github-repo-widget.component';
import { RepoStatComponent } from './components/shared/github-repo-widget/repo-stat/repo-stat.component';
import { CarouselComponent } from './components/shared/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubWidgetComponent,
    GithubStatComponent,
    GithubNameComponent,
    HomeComponent,
    ParallaxComponent,
    ThumbnailComponent,
    ProjectsComponent,
    GithubRepoWidgetComponent,
    RepoStatComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
