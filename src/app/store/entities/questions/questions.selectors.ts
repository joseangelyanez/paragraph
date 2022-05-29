import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IQuestionState, questionsAdapter } from "./questions.state";
 
const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = questionsAdapter.getSelectors();

const featureSelector = createFeatureSelector<IQuestionState>('questions');

export const getAllQuestions = createSelector(
    featureSelector,
    selectAll
);