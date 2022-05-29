import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";

export interface IQuestion {
    id:number,
    paragraphId:number,
    questionText :string,
    locale:string,
    sequence:number,
    userId:number,
    userName:string,
    urlName:string
}

export interface IQuestionState extends EntityState<IQuestion>{}

export const questionsAdapter: EntityAdapter<IQuestion> = createEntityAdapter<IQuestion>();
export const initialState: IQuestionState = questionsAdapter.getInitialState();