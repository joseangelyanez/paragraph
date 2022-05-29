import { createAction, props } from '@ngrx/store';
import { IOriginalLanguage } from '.././original-languages/original-languages.state';
import { IWork } from './works.state';

export const loadWorks = createAction(
    '[work-list] load works'
);

export const loadWorksCompleted = createAction(
    '[work-list] load works completed',
    props<{works: Array<IWork>}>()
);

export const loadWork = createAction(
    '[work-dashboard] load work',
    props<{workUrlName: string}>()
);

export const loadWorkCompleted = createAction(
    '[work-dashboard] load work completed',
    props<{ work : IWork }>()
);

// Note-to-self:
// When creating a new action the next step is to go to the reducer.