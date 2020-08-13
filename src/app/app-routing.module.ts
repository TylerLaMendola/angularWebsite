import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeWrapperComponent } from './components/home-wrapper/home-wrapper.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SkillsComponent } from './components/skills/skills.component';
const routes: Routes = [
  { path: 'home', component: HomeWrapperComponent },
  {
    path: 'aboutMe',
    component: AboutMeComponent,
  },
  {
    path: 'skills',
    component: SkillsComponent,
  },
  { path: '**', component: HomeWrapperComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
