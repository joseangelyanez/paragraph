import { createReducer, on } from "@ngrx/store";
import { loadParagraphsCompleted } from "./paragraphs.actions";
import { initialState, IParagraphState, paragraphsAdapter } from "./paragraphs.state";

export const createParagraphsReducer = createReducer(
    initialState as IParagraphState,
    on(loadParagraphsCompleted, (state, action) => {
        return paragraphsAdapter.setAll(action.paragraphs, state) 
    })
);