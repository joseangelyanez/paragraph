import { createReducer, on } from "@ngrx/store";
import { loadVideosCompleted } from "./videos.actions";
import { initialState, IVideoState, videosAdapter } from "./videos.state";

export const createVideosReducer = createReducer(
    initialState as IVideoState,
    on(loadVideosCompleted, (state, action) => {
        return videosAdapter.setAll(action.videos, state);
    })
);