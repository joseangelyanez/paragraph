import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/constants/app.constants';
import { IOriginalLanguage } from 'src/app/store/entities/original-language.state';
import { IParagraph } from 'src/app/store/entities/paragraphs.state';
import { ParagraphOriginalLanguagesComponent } from '../paragraph-original-languages/paragraph-original-languages.component';

interface IContentPart {
  word:string;
  text:string;
}

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss']
})
export class ParagraphComponent implements OnInit {
  @Input()
  paragraph:IParagraph;
  originalLanguages:Array<IOriginalLanguage> = [];
  contentParts :Array<IContentPart> = [];

  originalLanguagesVisible:boolean = false;

  constructor(public dialog: MatDialog, public constants:Constants) { }

  ngOnInit(): void {
  }

  toggleOriginalLanguages(){
    this.originalLanguagesVisible = !this.originalLanguagesVisible;
  }

  addNewOriginalLanguage(){
    const dialogRef = this.dialog.open(ParagraphOriginalLanguagesComponent);
    dialogRef.componentInstance.paragraphId = this.paragraph.id;
    
    dialogRef.afterClosed().subscribe((result)=>{
    });
  }
}