import { createReducer, on } from '@ngrx/store';
import { loadQuestionsCompleted } from './questions.actions';
import { initialState, IQuestionState, questionsAdapter } from './questions.state';

export const createQuestionsReducer = createReducer(
    initialState as IQuestionState,
    on(loadQuestionsCompleted, (state, action) => {
        return questionsAdapter.setAll(action.questions, state); 
    })
);