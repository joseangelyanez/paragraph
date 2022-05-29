import { createReducer, on } from "@ngrx/store";
import { loadOriginalLanguagesCompleted } from "./original-languages.actions";
import { initialState, IOriginalLanguageState, originalLanguagesAdapter } from "./original-languages.state";

export const createOriginalLanguagesReducer = createReducer(
    initialState as IOriginalLanguageState,
    on(loadOriginalLanguagesCompleted, (state, action) => {
        return originalLanguagesAdapter.setAll(action.originalLanguages, state);
    })
);