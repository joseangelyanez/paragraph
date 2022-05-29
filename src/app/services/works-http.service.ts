

import {Injectable} from "@angular/core";
import {HttpClient } from "@angular/common/http";
import {BehaviorSubject, map, Observable } from "rxjs";
import { IOriginalLanguage } from "../store/entities/original-languages/original-languages.state";
import { IWork } from "../store/entities/works/works.state";
import { IParagraph } from "../store/entities/paragraphs/paragraphs.state";
import { IWord } from "../store/entities/words/words.state";
import { IVideo } from "../store/entities/videos/videos.state";

@Injectable()
export class WorksHttpService {
    baseUrl:string = "https://localhost:7062/api";
    works:Map<string, Observable<IWork> | undefined> = new Map();

    constructor(private http:HttpClient) {}
    
    createOriginalLanguage(originalLanguage: IOriginalLanguage): any {
        return this.http.post(`${this.baseUrl}/paragraph/original-language`, originalLanguage);
    }

    getEntities(){
        throw new Error("hello world");
    }

    getAllWorks(): Observable<IWork[]> {
        throw new Error("not implemented");
    }

    getAllParagraphs() : Observable<IParagraph[]> {
        throw new Error("not implemented");
    }

    getWordExplanation(paragraph:IParagraph, text:string): IWord | null{
        throw new Error("not implemented");
    }
}
