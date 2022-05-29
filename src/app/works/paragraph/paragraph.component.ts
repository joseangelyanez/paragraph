import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/constants/app.constants';
import { IContentPart, WorksFacadeService } from 'src/app/services/works-facade.service';
import { IBlog } from 'src/app/store/entities/blogs/blogs.state';
import { IOriginalLanguage } from 'src/app/store/entities/original-languages/original-languages.state';
import { IParagraph } from 'src/app/store/entities/paragraphs/paragraphs.state';
import { IVideo } from 'src/app/store/entities/videos/videos.state';
import { ParagraphOriginalLanguagesComponent } from '../paragraph-original-languages/paragraph-original-languages.component';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss']
})
export class ParagraphComponent implements OnInit {
  @Input()
  paragraph:IParagraph;
  originalLanguages$:Observable<IOriginalLanguage[]>;
  videos$:Observable<IVideo[]>;
  blogs$:Observable<IBlog[]>;

  contentParts :Array<IContentPart> = [];

  originalLanguagesVisible:boolean = false;
  videosVisible:boolean = false;
  blogsVisible:boolean = false;

  constructor(
    public dialog: MatDialog, 
    public constants:Constants,
    public facade:WorksFacadeService,
    public router:Router) { }

  ngOnInit(): void {
    this.contentParts = this.facade.getContentParts(this.paragraph);
    this.originalLanguages$ = this.facade.getParagraphOriginalLanguages(this.paragraph);
    this.videos$ = this.facade.getParagraphVideos(this.paragraph);
    this.blogs$ = this.facade.getParagraphBlogs(this.paragraph);
  }

  toggleOriginalLanguages(){
    this.originalLanguagesVisible = !this.originalLanguagesVisible;
  }

  toggleVideos(){
    this.videosVisible = !this.videosVisible;
  }

  toggleBlogs() {
    this.blogsVisible = !this.blogsVisible;
  }

  goToQuestions() {
    //Grab work-1 from ActivatedRoute
    this.router.navigate(["works", "work-1", this.paragraph.urlName]);
  }

  addNewOriginalLanguage(){
    const dialogRef = this.dialog.open(ParagraphOriginalLanguagesComponent);
    dialogRef.componentInstance.paragraphId = this.paragraph.id;
    dialogRef.afterClosed().subscribe((result)=>{});
  }
}