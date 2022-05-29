import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, switchMap, tap } from 'rxjs';
import { WorksFacadeService } from 'src/app/services/works-facade.service';
import { selectParagraph } from 'src/app/store/entities/paragraphs/paragraphs.actions';
import { IQuestion } from 'src/app/store/entities/questions/questions.state';
import * as questionsSelectors from '../../store/entities/questions/questions.selectors';

@Component({
	selector: 'app-work-dashboard',
	templateUrl: './paragraph-dashboard.component.html',
	styleUrls: ['./paragraph-dashboard.component.scss']
})
export class ParagraphDashboardComponent implements OnInit {
	questions$:Observable<IQuestion[]>;

	constructor(
		private facade: WorksFacadeService,
		private store: Store,
		private activatedRoute: ActivatedRoute) 
	{ }

	ngOnInit(): void {
		this.questions$ = this.store.pipe(
			select(questionsSelectors.getAllQuestions)
		);

		let params = this.activatedRoute.params.pipe(
			switchMap(urlParams => {
				let paragraphUrlName = urlParams["paragraph"];
				return this.facade.getParagraphByUrlName(paragraphUrlName);
			}),
			tap((paragraphs) => {
				if (paragraphs.length == 0)
					return;

				this.store.dispatch(selectParagraph({
						paragraph : paragraphs[0]
					}
				));
			}) 
		).subscribe();
	}
}