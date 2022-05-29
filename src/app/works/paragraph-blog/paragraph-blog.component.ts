import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { IAppState } from 'src/app/store';
import { IBlog } from 'src/app/store/entities/blogs/blogs.state';

@Component({
	selector: 'paragraph-blog',
	templateUrl: './paragraph-blog.component.html',
	styleUrls: ['./paragraph-blog.component.scss']
})
export class ParagraphBlogComponent implements OnInit {
	@Input()
	blog:IBlog;

	constructor(
		private store: Store<IAppState>,
		private router: Router
	) { }

	ngOnInit(): void {
		
	}
}