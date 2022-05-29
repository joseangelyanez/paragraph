import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";

export interface IBlog {
    id:number,
    paragraphId:number,
    title :string,
    summary: string,
    locale:string,
    sequence: number,
    url : string
}

export interface IBlogState extends EntityState<IBlog>{}

export const blogsAdapter: EntityAdapter<IBlog> = createEntityAdapter<IBlog>();
export const initialState: IBlogState = blogsAdapter.getInitialState()