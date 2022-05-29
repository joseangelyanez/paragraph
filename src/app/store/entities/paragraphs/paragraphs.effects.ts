import { Injectable } from "@angular/core";
import { act, Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { switchMap, tap } from "rxjs";
import { loadParagraphsCompleted, selectParagraph } from "./paragraphs.actions";
import { WorksFacadeService } from "src/app/services/works-facade.service";
import { loadQuestionsCompleted } from "../questions/questions.actions";

@Injectable()
export class ParagraphsEffects {
    constructor(
        private actions$: Actions,
        private store: Store,
        private facade: WorksFacadeService)
    {}

    selectParagraph$ = createEffect(
        () => this.actions$.pipe(
            ofType(selectParagraph),
            switchMap( action => this.facade.getQuestionsForParagraph(action.paragraph)),
            tap( response => {
                this.store.dispatch(
                    loadQuestionsCompleted({
                        questions : response
                    })
                );
            })
        ), 
        { dispatch: false }
    );
}