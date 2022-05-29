import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IVideoState, videosAdapter } from "./videos.state";
 
const {
  selectAll,
} = videosAdapter.getSelectors();

const featureSelector = createFeatureSelector<IVideoState>(
    'videos'
);

export const getVideos = createSelector(
    featureSelector,
    selectAll
);

export const getVideosByParagraphId = (paragraphId:number) =>{
    return createSelector(
        getVideos,
        videos => videos.filter( n => n.paragraphId == paragraphId)
    );
}