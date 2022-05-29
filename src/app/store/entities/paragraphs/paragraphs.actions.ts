import { createAction, props } from "@ngrx/store";
import { IParagraph } from "./paragraphs.state";

export const loadParagraphsCompleted = createAction(
    '[work-dashboard] load paragraphs completed',
    props<{ paragraphs:IParagraph[]}>()
);

export const selectParagraph = createAction(
    '[work-dashboard] select paragraph',
    props<{ paragraph:IParagraph } >()
);