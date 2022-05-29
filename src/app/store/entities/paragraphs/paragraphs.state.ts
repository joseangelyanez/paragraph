import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";

export interface IParagraph {
    id:number,
    title : string,
    content : string,
    locale : string,
    sequence : number,
    workId : number,
    words : Array<number>,
    originalLanguages: Array<number>,
    urlName: string
}

export interface IParagraphState extends EntityState<IParagraph> {
    selectedParagraphId:number
}

export const paragraphsAdapter: EntityAdapter<IParagraph> = createEntityAdapter<IParagraph>();
export const initialState: IParagraphState = paragraphsAdapter.getInitialState({
    selectedParagraphId : -1
});