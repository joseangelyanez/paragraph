import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";

export interface IOriginalLanguage{
    id:number,
    paragraphId:number,
    isTransliteration:boolean,
    transliterationName:string,
    text:string
}

export interface IOriginalLanguageState extends EntityState<IOriginalLanguage>{}

export const originalLanguagesAdapter:EntityAdapter<IOriginalLanguage> = createEntityAdapter<IOriginalLanguage>();

export const initialState: IOriginalLanguageState = originalLanguagesAdapter.getInitialState();
