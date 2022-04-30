import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState } from 'src/app/store';
import { loadWorks } from 'src/app/store/entities/works.actions';
import { worksLoading } from 'src/app/store/entities/works.selectors';
import { IWork } from 'src/app/store/entities/works.state';
import * as worksSelectors from '../../store/entities/works.selectors';

@Component({
	selector: 'app-work-list',
	templateUrl: './work-list.component.html',
	styleUrls: ['./work-list.component.scss']
})
export class WorkListComponent implements OnInit {
	isLoading$: Observable<boolean>;
	works$: Observable<IWork[]>;

	constructor(
		private store: Store<IAppState>,
		private router: Router
	) { }


	ngOnInit(): void {
		this.isLoading$ = this.store.pipe(
			select(worksSelectors.worksLoading)
		);

		this.works$ = this.store.pipe(
			select(worksSelectors.getAllWorks)
		);
	}

	loadAllWorks(): void {
		this.store.dispatch(loadWorks());
	}

	goToWork(urlName:string): void {
		this.router.navigate(["works", urlName]);
	}
}