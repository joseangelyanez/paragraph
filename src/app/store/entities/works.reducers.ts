import { createReducer, on } from '@ngrx/store';
import { loadWork, loadWorkCompleted, loadWorks, loadWorksCompleted } from './works.actions';
import { initialState, IWorkState, worksAdapter } from './works.state';

export const createWorksReducer = createReducer(
    initialState as IWorkState,
    on(loadWorks, (state) => { 
        return ({...state, isLoading : true})
    }),
    on(loadWorksCompleted, (state, action) => {
        return worksAdapter.setAll(action.works, state) 
    }),
    on(loadWork, (state, action) => {
        return ({...state, selectedWorkUrlName : action.workUrlName });
    }),
    on(loadWorkCompleted, (state, action) => {
        let result = worksAdapter.setOne(action.work, state);
        result.selectedWorkId = action.work.id;

        return result;
    })
);