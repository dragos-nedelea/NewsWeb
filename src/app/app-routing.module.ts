import { TopheadingComponent } from './topheading/topheading.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnewsComponent } from './technews/technews.component';
import {BusinessnewsComponent} from './businessnews/businessnews.component';

const routes: Routes = [
{path: '',component:TopheadingComponent}, //Home
{path: 'tech',component:TechnewsComponent}, //Tech News
{path: 'business',component:BusinessnewsComponent}, //Business News


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
