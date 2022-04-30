import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadWork } from 'src/app/store/entities/works.actions';
import { IWork, IWorkState } from 'src/app/store/entities/works.state';
import * as worksSelectors from '../../store/entities/works.selectors';

@Component({
	selector: 'app-work-dashboard',
	templateUrl: './work-dashboard.component.html',
	styleUrls: ['./work-dashboard.component.scss']
})
export class WorkDashboardComponent implements OnInit {
	constructor(
		private store: Store, 
		private route: ActivatedRoute) 
	{ }

	work$: Observable<IWork | undefined>;

	ngOnInit(): void {
		this.work$ = this.store.pipe(select(worksSelectors.getSelectedWork));

		this.store.dispatch(loadWork({
			workUrlName : this.route.snapshot.paramMap.get("name") ?? ""
		}));
	}
}
