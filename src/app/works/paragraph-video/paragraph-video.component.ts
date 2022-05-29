import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { IAppState } from 'src/app/store';
import { IVideo } from 'src/app/store/entities/videos/videos.state';

@Component({
	selector: 'paragraph-video',
	templateUrl: './paragraph-video.component.html',
	styleUrls: ['./paragraph-video.component.scss']
})
export class ParagraphVideosComponent implements OnInit {
	@Input()
	video:IVideo;

	constructor(
		private store: Store<IAppState>,
		private router: Router
	) { }


	ngOnInit(): void {
		
	}
}