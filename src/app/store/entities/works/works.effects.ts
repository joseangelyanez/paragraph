import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { delay, switchMap, tap } from "rxjs";
import { loadWork, loadWorkCompleted, loadWorks, loadWorksCompleted } from "./works.actions";
import { loadParagraphsCompleted } from "../paragraphs/paragraphs.actions";
import { loadOriginalLanguagesCompleted } from "../original-languages/original-languages.actions";
import { WorksFacadeService } from "src/app/services/works-facade.service";
import { loadVideosCompleted } from "../videos/videos.actions";
import { loadBlogsCompleted } from "../blogs/blogs.actions";

@Injectable()
export class WorksEffects {
    constructor(
        private actions$: Actions,
        private store: Store,
        private facade: WorksFacadeService)
    {}

    getWorksEffect$ = createEffect(() => this.actions$.pipe(
        ofType(loadWorks),
        switchMap( () => this.facade.getAllWorks()),
        tap(works => {
            this.store.dispatch(loadWorksCompleted({
                works : works
            }));
        })
    ), {dispatch: false});

    selectWork$ = createEffect(
        () => this.actions$.pipe(
            ofType(loadWork),
            switchMap( action => this.facade.getEntities()),
            tap( response => {
                this.store.dispatch(
                    loadWorkCompleted({
                        work : response.work
                    })
                );   
                this.store.dispatch(
                    loadParagraphsCompleted({
                        paragraphs : response.paragraphs
                    })
                );
                this.store.dispatch(
                    loadOriginalLanguagesCompleted({
                        originalLanguages : response.originalLanguages
                    })
                );
                this.store.dispatch(
                    loadVideosCompleted({
                        videos : response.videos
                    })
                );
                this.store.dispatch(
                    loadBlogsCompleted({
                        blogs : response.blogs
                    })
                );
            })
        ), 
        { dispatch: false }
    );
}