import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IBlogState, blogsAdapter } from "./blogs.state";
 
const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = blogsAdapter.getSelectors();

const featureSelector = createFeatureSelector<IBlogState>('blogs');

export const getAllBlogs = createSelector(
    featureSelector,
    selectAll
);

export const getBlogsByParagraphId = (paragraphId:number) =>{
    return createSelector(
        getAllBlogs,
        blogs => {
            return blogs.filter( n => n.paragraphId == paragraphId);
        }
    );
}