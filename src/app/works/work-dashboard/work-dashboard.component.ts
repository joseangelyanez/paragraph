import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IParagraph } from 'src/app/store/entities/paragraphs/paragraphs.state';
import { IWork } from 'src/app/store/entities/works/works.state';
import { WorksFacadeService } from 'src/app/services/works-facade.service';

@Component({
	selector: 'app-work-dashboard',
	templateUrl: './work-dashboard.component.html',
	styleUrls: ['./work-dashboard.component.scss']
})
export class WorkDashboardComponent implements OnInit {
	constructor(
		private facade: WorksFacadeService) 
	{ }

	work$: Observable<IWork | undefined>;
	paragraphs$ : Observable<IParagraph[]>;

	ngOnInit(): void {
		this.work$ = this.facade.getSelectedWork();
		this.paragraphs$ = this.facade.getParagraphsForSelectedWork();
		
		this.facade.loadWorkFromCurrentUrl();
	}
}
