import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IWorkState, worksAdapter } from "./works.state";
 
const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = worksAdapter.getSelectors();


const featureSelector = createFeatureSelector<IWorkState>('works');

export const getSelectedWork = createSelector(
    featureSelector,
    (state: IWorkState) => state.entities[state.selectedWorkId]
);

export const getAllWorks = createSelector(
    featureSelector,
    selectAll
);

export const worksLoading = createSelector(
    featureSelector,
    (state:IWorkState) => state.isLoading
);