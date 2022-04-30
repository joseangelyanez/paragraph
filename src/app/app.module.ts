import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createReducer, StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { WorkHomeComponent } from './works/work-home/work-home.component';
import { WorkListComponent } from './works/work-list/work-list.component';
import { createWorksReducer } from './store/entities/works.reducers';
import { EffectsModule } from '@ngrx/effects';
import { WorksEffects } from './store/entities/works.effects';
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
 
@NgModule({
  declarations: [
    AppComponent,
    WorkHomeComponent,
    WorkListComponent,
    WorkDashboardComponent,
    ParagraphComponent,
    ParagraphOriginalLanguagesComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature("works", createWorksReducer),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([WorksEffects]),
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
    Constants
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
