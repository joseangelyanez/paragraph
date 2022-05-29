import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParagraphDashboardComponent } from './works/paragraph-dashboard/paragraph-dashboard.component';
import { WorkDashboardComponent } from './works/work-dashboard/work-dashboard.component';
import { WorkListComponent } from './works/work-list/work-list.component';

const routes: Routes = [
	{ path: "works", component: WorkListComponent },
	{ path: "works/:name", component : WorkDashboardComponent },
	{ path: "works/:name/:paragraph", component : ParagraphDashboardComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes), CommonModule],
	exports: [RouterModule]
})
export class AppRoutingModule { }
