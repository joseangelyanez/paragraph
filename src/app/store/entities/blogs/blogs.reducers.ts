import { createReducer, on } from '@ngrx/store';
import { loadBlogsCompleted } from './blogs.actions';
import { blogsAdapter, IBlogState, initialState } from './blogs.state';

export const createBlogsReducer = createReducer(
    initialState as IBlogState,
    on(loadBlogsCompleted, (state, action) => {
        return blogsAdapter.setAll(action.blogs, state) 
    })
);