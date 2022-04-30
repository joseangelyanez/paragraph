import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { delay, switchMap, tap } from "rxjs";
import { WorksHttpService } from "src/app/services/works-http.service";
import { createOriginalLanguage, createOriginalLanguageCompleted, loadWork, loadWorkCompleted, loadWorks, loadWorksCompleted } from "./works.actions";
import { IParagraph } from "./paragraphs.state";

const specialChars:Array<string> = [";", ",", ".", ":", "-", "=", "?", "[", "]", "~"];

@Injectable()
export class WorksEffects {
    constructor(
        private actions$: Actions,
        private store: Store,
        private http: WorksHttpService)
    {}
    /*
    analyzeWords(paragraph:IParagraph){
        let array = paragraph.content.split(" ");
        let getWord = (text:string) => {
            specialChars.forEach(
                (character) => text = text.replace(character, "")
            );
            return paragraph.words.find((word) => word.text.toLocaleLowerCase() == text.toLocaleLowerCase());
        };

        var parts = array.map((part) => <IContentPart>{
            text : part,
            word : getWord(part)
        });
        paragraph.contentParts = parts;
    }*/

    getWorksEffect$ = createEffect(() => this.actions$.pipe(
        ofType(loadWorks),
        switchMap( () => this.http.getAllWorks()),
        tap(works => {
            this.store.dispatch(loadWorksCompleted({
                works : works
            }));
        })
    ), {dispatch: false});

    selectWork$ = createEffect(
        () => this.actions$.pipe(
            ofType(loadWork),
            switchMap( action => this.http.getWorkByUrlName(action.workUrlName)),
            tap( work => {
                //work.paragraphs.forEach(p => this.analyzeWords(p)); 
            
                this.store.dispatch(
                    loadWorkCompleted({
                        work : work   
                    })
                );   
            })
        ), 
        { dispatch: false }
    );

    createNewOriginalLanguage$ = createEffect(
        ()=> this.actions$.pipe(
            ofType(createOriginalLanguage),
            switchMap( action => this.http.createOriginalLanguage(action.originalLanguage)),
            tap(() => {
                this.store.dispatch( createOriginalLanguageCompleted() );   
            })
        ),
        { dispatch : false }
    );
}