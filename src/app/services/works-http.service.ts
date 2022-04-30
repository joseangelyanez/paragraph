

import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {map, Observable, publishReplay, share, shareReplay} from "rxjs";
import { IOriginalLanguage } from "../store/entities/original-language.state";
import { IWork } from "../store/entities/works.state";
import { IParagraph } from "../store/entities/paragraphs.state";
import { IWord } from "../store/entities/words.state";

interface IEntities {
    works : IWork[],
    paragraphs : IParagraph[],
    words : IWord[],
    originalLanguages : IOriginalLanguage[]
}

@Injectable()
export class WorksHttpService {
    baseUrl:string = "https://localhost:7062/api";
    works:Map<string, Observable<IWork> | undefined> = new Map();

    constructor(private http:HttpClient) {}
    
    createOriginalLanguage(originalLanguage: IOriginalLanguage): any {
        return this.http.post(`${this.baseUrl}/paragraph/original-language`, originalLanguage);
    }

    getEntities(){
        if (this.entities == null) {
            return this.http.get<IEntities>(`${this.baseUrl}/paragraph`).pipe(
                    shareReplay({
                        bufferSize : 1,
                        refCount:true
                    })
                );
        }

        return this.entities;
    }

    getAllWorks(): Observable<IWork[]> {
        return this.getEntities().pipe(
            map((result:IEntities) => result.works)
        );
    }

    getAllParagraphs() : Observable<IParagraph[]> {
        return this.getEntities().pipe(
            map((result:IEntities) => result.paragraphs)
        );
    }

    getWorkByUrlName(urlName:string):Observable<IWork> | undefined {
        if (this.works.get(urlName) == null) {
            this.works.set(
                urlName, 
                this.http.get<IWork>(`${this.baseUrl}/work/${urlName}`).pipe(
                    shareReplay({ bufferSize : 1, refCount: false})
                )   
            )
        }
        
        return this.works.get(urlName);
    }
}
