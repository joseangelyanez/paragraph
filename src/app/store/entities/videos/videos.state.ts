import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";

export interface IVideo{
    id:number,
    url:string,
    text:string,
    paragraphId:number,
    locale:string
}

export interface IVideoState extends EntityState<IVideo>{}

export const videosAdapter: EntityAdapter<IVideo> = createEntityAdapter<IVideo>();

export const initialState: IVideoState = videosAdapter.getInitialState();