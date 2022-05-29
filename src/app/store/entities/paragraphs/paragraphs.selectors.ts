import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IParagraphState, paragraphsAdapter } from "./paragraphs.state";
 
const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = paragraphsAdapter.getSelectors();

const featureSelector = createFeatureSelector<IParagraphState>('paragraphs');

export const getAllParagraphs = createSelector(
    featureSelector,
    selectAll
);