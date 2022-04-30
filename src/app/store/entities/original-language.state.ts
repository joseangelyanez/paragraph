import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";

export interface IOriginalLanguage{
    id:number,
    paragraphId:number,
    isTransliteration:boolean,
    transliterationName:string,
    text:string
}

export interface IOriginalLanguage extends EntityState<IOriginalLanguage>{

}

export const originalLanguagesAdapter:EntityAdapter<IOriginalLanguage> = createEntityAdapter<IOriginalLanguage>();