import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { createWorksReducer } from './entities/works.reducers';
import { IWorkState } from './entities/works.state';

export interface IAppState {
    works : IWorkState
}

export const reducers: ActionReducerMap<IAppState> = {
    works : createWorksReducer
};
export const metaReducers: MetaReducer<IAppState>[] = [];