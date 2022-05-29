import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { switchMap, tap } from "rxjs";
import { WorksFacadeService } from "src/app/services/works-facade.service";
import { createOriginalLanguage } from "./original-languages.actions";

@Injectable()
export class OriginalLanguagesEffects {
    constructor(
        private actions$: Actions,
        private store: Store,
        private facade: WorksFacadeService)
    {}

    createNewOriginalLanguage$ = createEffect(
        ()=> this.actions$.pipe(
            ofType(createOriginalLanguage),
            tap( action => this.facade.createOriginalLanguage(action.originalLanguage) ),
            /*tap(() => {
                this.store.dispatch( createOriginalLanguageCompleted() );   
            })*/
        ),
        { dispatch : false }
    );
}