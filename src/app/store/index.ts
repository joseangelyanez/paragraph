import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { createBlogsReducer } from './entities/blogs/blogs.reducers';
import { IBlogState } from './entities/blogs/blogs.state';
import { createOriginalLanguagesReducer } from './entities/original-languages/original-languages.reducers';
import { IOriginalLanguageState } from './entities/original-languages/original-languages.state';
import { createParagraphsReducer } from './entities/paragraphs/paragraphs.reducers';
import { IParagraphState } from './entities/paragraphs/paragraphs.state';
import { createQuestionsReducer } from './entities/questions/questions.reducers';
import { IQuestionState } from './entities/questions/questions.state';
import { createVideosReducer } from './entities/videos/videos.reducers';
import { IVideoState } from './entities/videos/videos.state';
import { createWorksReducer } from './entities/works/works.reducers';
import { IWorkState } from './entities/works/works.state';

export interface IAppState {
    works : IWorkState,
    paragraphs : IParagraphState,
    originalLanguages : IOriginalLanguageState,
    videos : IVideoState,
    blogs : IBlogState,
    questions : IQuestionState
}

export const reducers: ActionReducerMap<IAppState> = {
    works : createWorksReducer,
    paragraphs : createParagraphsReducer,
    originalLanguages : createOriginalLanguagesReducer,
    videos : createVideosReducer,
    blogs : createBlogsReducer,
    questions : createQuestionsReducer
};
export const metaReducers: MetaReducer<IAppState>[] = [];