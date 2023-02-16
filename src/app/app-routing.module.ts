import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { FilterComponent } from './courses/filter/filter.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SearchComponent } from './courses/search/search.component';
import { FormsComponent } from './forms/forms.component';
import { DirectivesComponent } from './directives/directives.component';
import { CourseComponent } from './courses/course/course.component';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: '', component:HomeComponent},
  {path:'courses', component:CoursesComponent},
  {path:'courses/course/:id', component:CourseComponent},
  {path:'home', component:HomeComponent},
  {path:'forms', component:FormsComponent},
  {path:'login', component:LoginComponent},
  {path:'logout', component:LogoutComponent},
  {path:'search', component:SearchComponent},
  {path:'filter', component:FilterComponent},
  {path:'directives', component:DirectivesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
