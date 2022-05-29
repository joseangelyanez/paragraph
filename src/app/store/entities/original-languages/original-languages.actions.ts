import { createAction, props } from "@ngrx/store";
import { IOriginalLanguage } from "./original-languages.state";

export const loadOriginalLanguagesCompleted = createAction(
    '[work-dashboard] load paragraphs original languages completed',
    props<{ originalLanguages:IOriginalLanguage[]} >()
);

export const createOriginalLanguage = createAction(
    "[paragraph-original-languagues] create original language",
    props<{originalLanguage: IOriginalLanguage}>()
);