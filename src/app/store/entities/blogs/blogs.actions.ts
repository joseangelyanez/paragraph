import { createAction, props } from '@ngrx/store';
import { IBlog } from './blogs.state';

export const loadBlogsCompleted = createAction(
    '[work-dashboard] load blogs completed',
    props<{blogs: Array<IBlog>}>()
);

// Note-to-self:
// When creating a new action the next step is to go to the reducer.