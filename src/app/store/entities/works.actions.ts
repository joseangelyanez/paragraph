import { createAction, props } from '@ngrx/store';
import { IOriginalLanguage } from './original-language.state';
import { IParagraph } from './paragraphs.state';
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
    props<{ work : IWork, paragraphs:IParagraph[]}>()
);


export const createOriginalLanguage = createAction(
    "[paragraph-original-languagues] create original language",
    props<{originalLanguage: IOriginalLanguage}>()
);

export const createOriginalLanguageCompleted = createAction(
    "[paragraph-original-languagues] create original language completed"
);

// Note-to-self:
// When creating a new action the next step is to go to the reducer.