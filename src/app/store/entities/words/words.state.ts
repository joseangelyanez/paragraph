import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";

export interface IWord {
    id:number,
    text:string,
    sequence:number,
    locale:string,
    explanation:string,
    paragraphId:number
}

export interface IWordState extends EntityState<IWord> {
    
}

export const wordsAdapter : EntityAdapter<IWord> = createEntityAdapter<IWord>();