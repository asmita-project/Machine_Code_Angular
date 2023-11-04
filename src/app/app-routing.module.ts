import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [

    {path: "homepage", component: HomepageComponent},
    { path: '', redirectTo: '/homepage', pathMatch: 'full' },
    {path: "project", component: ProjectComponent},
    {path: "addproject", component: ProjectComponent},



];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }