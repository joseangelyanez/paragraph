import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkDashboardComponent } from './works/work-dashboard/work-dashboard.component';
import { WorkListComponent } from './works/work-list/work-list.component';

const routes: Routes = [
	{ path: "works", component: WorkListComponent },
	{ path: "works/:name", component : WorkDashboardComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes), CommonModule],
	exports: [RouterModule]
})
export class AppRoutingModule { }
