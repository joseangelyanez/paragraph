import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IOriginalLanguageState, originalLanguagesAdapter } from "./original-languages.state";
 
const {
  selectAll,
} = originalLanguagesAdapter.getSelectors();

const featureSelector = createFeatureSelector<IOriginalLanguageState>(
    'originalLanguages'
);

export const getAllOriginalLanguages = createSelector(
    featureSelector,
    selectAll
);

export const getOriginalLanguagesByParagraphId = (paragraphId:number) =>{
    return createSelector(
        getAllOriginalLanguages,
        originalLanguages => {
            console.log(originalLanguages);
            return originalLanguages.filter( n => n.paragraphId == paragraphId);
        }
    );
}