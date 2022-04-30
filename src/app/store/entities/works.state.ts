import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { State } from "@ngrx/store";

export interface IWork {
    id:number,
    urlName : string,
    title :string,
    content: string,
    locale:string,
    sequence: number,
    paragraphs : Array<number>
}

export interface IWorkState extends EntityState<IWork>{
    selectedWorkId : number,
    isLoading : boolean
}

export const worksAdapter: EntityAdapter<IWork> = createEntityAdapter<IWork>();
export const initialState: IWorkState = worksAdapter.getInitialState({
    selectedWorkId : -1,
    isLoading : false
})