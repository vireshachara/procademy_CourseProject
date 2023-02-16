import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CoursesComponent } from './courses/courses.component';
import { FilterComponent } from './courses/filter/filter.component';
import { SearchComponent } from './courses/search/search.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsComponent } from './forms/forms.component';
import { BackgroundDirective } from './Services/Directives/background.directive';
import { HighlightDirective } from './Services/Directives/highlight.directive';
import { DirectivesComponent } from './directives/directives.component';
import { HoverDirective } from './Services/Directives/hover.directive';
import { BetterhighlightDirective } from './Services/Directives/betterhighlight.directive';
import { CustompropertybindingDirective } from './Services/Directives/custompropertybinding.directive';
import { CourseComponent } from './courses/course/course.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoursesComponent,
    FilterComponent,
    SearchComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    FormsComponent,
    BackgroundDirective,
    HighlightDirective,
    DirectivesComponent,
    HoverDirective,
    BetterhighlightDirective,
    CustompropertybindingDirective,
    CourseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
