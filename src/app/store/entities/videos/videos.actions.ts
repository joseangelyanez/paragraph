import { createAction, props } from "@ngrx/store";
import { IVideo } from "./videos.state";

export const loadVideosCompleted = createAction(
    '[work-dashboard] load videos completed',
    props<{ videos:IVideo[]} >()
);