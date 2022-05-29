import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createReducer, StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { WorkHomeComponent } from './works/work-home/work-home.component';
import { WorkListComponent } from './works/work-list/work-list.component';
import { createWorksReducer } from './store/entities/works/works.reducers';
import { EffectsModule } from '@ngrx/effects';
import { WorksEffects } from './store/entities/works/works.effects';
import { WorkDashboardComponent } from './works/work-dashboard/work-dashboard.component';
import { WorksHttpService } from './services/works-http.service';
import { HttpClientModule } from '@angular/common/http';
import { ParagraphComponent } from './works/paragraph/paragraph.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { Constants } from './constants/app.constants';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ParagraphOriginalLanguagesComponent } from './works/paragraph-original-languages/paragraph-original-languages.component';
import { createParagraphsReducer } from './store/entities/paragraphs/paragraphs.reducers';
import { WordAnalyzerService } from './services/word-analyzer.service';
import { WorksFacadeService } from './services/works-facade.service';
import { createOriginalLanguagesReducer } from './store/entities/original-languages/original-languages.reducers';
import { createVideosReducer } from './store/entities/videos/videos.reducers';
import { ParagraphVideosComponent } from './works/paragraph-video/paragraph-video.component';
import { ParagraphBlogComponent } from './works/paragraph-blog/paragraph-blog.component';
import { createBlogsReducer } from './store/entities/blogs/blogs.reducers';
import { createQuestionsReducer } from './store/entities/questions/questions.reducers';
import { ParagraphDashboardComponent } from './works/paragraph-dashboard/paragraph-dashboard.component';
import { ParagraphsEffects } from './store/entities/paragraphs/paragraphs.effects';
import { OriginalLanguagesEffects } from './store/entities/original-languages/original-languages.effects';
 
@NgModule({
  declarations: [
    AppComponent,
    WorkHomeComponent,
    WorkListComponent,
    WorkDashboardComponent,
    ParagraphComponent,
    ParagraphOriginalLanguagesComponent,
    ParagraphVideosComponent,
    ParagraphBlogComponent,
    ParagraphDashboardComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature("works", createWorksReducer),
    StoreModule.forFeature("paragraphs", createParagraphsReducer),
    StoreModule.forFeature("originalLanguages", createOriginalLanguagesReducer),
    StoreModule.forFeature("videos", createVideosReducer),
    StoreModule.forFeature("blogs", createBlogsReducer),
    StoreModule.forFeature("questions", createQuestionsReducer),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([WorksEffects, ParagraphsEffects, OriginalLanguagesEffects]),
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatCheckboxModule
  ],
  providers: [
    WorksHttpService,
    WordAnalyzerService,
    WorksFacadeService,
    Constants
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
