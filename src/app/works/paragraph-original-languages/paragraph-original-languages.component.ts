import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { createOriginalLanguage } from 'src/app/store/entities/original-languages/original-languages.actions';

@Component({
  selector: 'app-paragraph-original-languages',
  templateUrl: './paragraph-original-languages.component.html',
  styleUrls: ['./paragraph-original-languages.component.scss']
})
export class ParagraphOriginalLanguagesComponent implements OnInit {
  	title: string;
	text: string;
	transliterationName: string;
	isTransliteration: boolean;
	
	@Input()
	paragraphId:number;

	constructor(private store:Store){}

	ngOnInit(): void {
	}

	save(): void{
		this.store.dispatch(createOriginalLanguage(
			{
				originalLanguage : {
					id : 0,
					paragraphId: this.paragraphId,
					text: this.text,
					transliterationName: this.transliterationName,
					isTransliteration: this.isTransliteration
				}
			}
		));
	}
}