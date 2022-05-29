import { createAction, props } from '@ngrx/store';
import { IQuestion } from './questions.state';

export const loadQuestionsCompleted = createAction(
    '[work-dashboard] load questions completed',
    props<{questions: IQuestion[]}>()
);

// Note-to-self:
// When creating a new action the next step is to go to the reducer.