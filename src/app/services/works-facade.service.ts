

import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {BehaviorSubject, map, Observable, publishReplay, share, shareReplay, Subject} from "rxjs";
import { IOriginalLanguage } from "../store/entities/original-languages/original-languages.state";
import { IWork } from "../store/entities/works/works.state";
import { IParagraph } from "../store/entities/paragraphs/paragraphs.state";
import { IWord } from "../store/entities/words/words.state";
import { select, Store } from "@ngrx/store";
import * as worksSelectors from '../store/entities/works/works.selectors';
import * as paragraphsSelectors from '../store/entities/paragraphs/paragraphs.selectors';
import * as originalLanguageSelectors from '../store/entities/original-languages/original-languages.selectors'
import * as videosSeletor from '../store/entities/videos/videos.selectors';
import * as blogsSelector from '../store/entities/blogs/blogs.selectors';
import { loadWork } from "../store/entities/works/works.actions";
import { ActivatedRoute } from "@angular/router";
import { IVideo } from "../store/entities/videos/videos.state";
import { IBlog } from "../store/entities/blogs/blogs.state";
import { IQuestion } from "../store/entities/questions/questions.state";

interface IEntities {
    work : IWork,
    paragraphs : IParagraph[],
    words : IWord[],
    originalLanguages : IOriginalLanguage[],
    videos: IVideo[],
    blogs : IBlog[],
    questions : IQuestion[]
}

const specialChars:Array<string> = [";", ",", ".", ":", "-", "=", "?", "[", "]", "~"];

export interface IContentPart {
    text:string,
    word?:IWord
}

@Injectable()
export class WorksFacadeService {
    constructor(
        private store: Store, 
        private route:ActivatedRoute
        )
    {}

    initializeEntities():IEntities {
        return <IEntities>{
            work : <IWork>
                {
                    id : 1,
                    content : "The first work content!",
                    locale : "en-us",
                    sequence : 1,
                    title : "The first work title",
                    urlName : "work-1"
                },
            paragraphs : <IParagraph[]>[
                {
                    id : 1,
                    content : "The first (1) paragraph content...",
                    locale : "en-us",
                    originalLanguages : [1],
                    sequence : 1,
                    title : "The first paragraph title",
                    words : [],
                    workId : 1,
                    urlName : "paragraph-1"
                },
                {
                    id : 2,
                    content : "This is the content for the second paragraph.",
                    locale : "en-us",
                    originalLanguages : [1],
                    sequence : 2,
                    title : "The second (2) paragraph",
                    words : [],
                    workId : 1,
                    urlName : "paragraph-2"
                }
            ],
            originalLanguages : <IOriginalLanguage[]>[
                {
                    id : 1,
                    isTransliteration : true,
                    text : "transliteration-text-here",
                    transliterationName : "Transliteration test",
                    paragraphId : 1
                }, 
                {
                    id: 2,
                    isTransliteration : true,
                    text : "the-other-transliteration-text",
                    transliterationName: "Transliteration test 2",
                    paragraphId : 2
                }
            ],
            words : <IWord[]>[
                {
                    id : 1,
                    explanation : "This is the first word",
                    locale : "en-us",
                    paragraphId : 1,
                    sequence : 1,
                    text : "first"
                }
            ],
            videos: [
                {
                    id : 1,
                    paragraphId : 1,
                    text : "Here's the video",
                    url : "the.url.com",
                    locale : "en-us"
                }
            ],
            blogs: [
                {
                    id : 1,
                    paragraphId : 1,
                    title : "The blog title",
                    summary : "The summary title",
                    url : "the.url.com",
                    locale : "en-us",
                    sequence : 1
                }
            ],
            questions : [
                {
                    id : 1,
                    paragraphId: 1,
                    questionText : "What is this first paragraph?",
                    locale : "en-us",
                    sequence: 1,
                    userId: 1,
                    userName : "User One",
                    urlName : "question-1"
                }
            ]
        };
    }

    saveEntities(entities:IEntities){
        let entitiesJson = JSON.stringify(entities);
        localStorage.setItem("entities", entitiesJson); 
    }

    getEntitiesFromLocalStorage():IEntities{
        let entitiesJson = localStorage.getItem("entities");
        if (entitiesJson != null) {
            return <IEntities>JSON.parse(entitiesJson);
        }

        let entities:IEntities = this.initializeEntities();
        this.saveEntities(entities);
        return entities;
    }

    getEntities(){
        let entities = this.getEntitiesFromLocalStorage();
        return new BehaviorSubject<IEntities>(entities);
    }

    createOriginalLanguage(originalLanguage: IOriginalLanguage): any {
        let entities = this.getEntitiesFromLocalStorage();
        let newId:number = entities.originalLanguages.length;
        let newEntry = ({...originalLanguage, id:newId, sequence:newId});

        entities.originalLanguages.push(newEntry);
        this.saveEntities(entities);
    }

    getContentParts(paragraph:IParagraph) : IContentPart[]{
        let array = paragraph.content.split(" ");

        var parts = array.map((part) => <IContentPart>{
            text : part,
            word : this.getWordExplanation(paragraph, part)
        });
        
        return parts;
    }

    loadWorkFromCurrentUrl(){
        this.store.dispatch(loadWork({
			workUrlName : this.route.snapshot.paramMap.get("name") ?? ""
		}));
    }
    
    getSelectedWork() : Observable<IWork | undefined> {
        return this.store.pipe(select(worksSelectors.getSelectedWork));
    }

    getParagraphsForSelectedWork():Observable<IParagraph[]>{
        return this.store.pipe(select(paragraphsSelectors.getAllParagraphs));
    }

    getParagraphOriginalLanguages(paragraph:IParagraph){
        return this.store.pipe(select(originalLanguageSelectors.getOriginalLanguagesByParagraphId(paragraph.id)));
    }

    getParagraphVideos(paragraph:IParagraph){
        return this.store.pipe(select(videosSeletor.getVideosByParagraphId(paragraph.id)));
    }

    getParagraphBlogs(paragraph:IParagraph){
        return this.store.pipe(select(blogsSelector.getBlogsByParagraphId(paragraph.id)));
    }

    getAllWorks(): Observable<IWork[]> {
        return new BehaviorSubject([
            <IWork>{
                id : 1,
                content : "The main work, the only work",
                locale : "en-us",
                paragraphs : [],
                sequence : 1,
                title : "The main work",
                urlName : "work-1"
            }
        ])
    }

    getAllParagraphs() : Observable<IParagraph[]> {
        return this.getEntities().pipe(
            map((result:IEntities) => result.paragraphs)
        );
    }

    getQuestionsForParagraph(paragraph:IParagraph) : Observable<IQuestion[]> {
        return this.getEntities().pipe(
            map((result:IEntities) => result.questions.filter( n => n.paragraphId == paragraph.id))
        );
    }

    getParagraphByUrlName(paragraphUrlName:string) :Observable<IParagraph[]>{
        return this.getEntities().pipe(
            map( (result:IEntities) => result.paragraphs.filter( n=> n.urlName == paragraphUrlName )  )
        );
    }

    getWordExplanation(paragraph:IParagraph, text:string): IWord | null{
        if (text != "first")
            return null;

        return <IWord>{
            id : 1,
            explanation : "This is the first word",
            locale : "en-us",
            paragraphId : 1,
            sequence : 1,
            text : "first"
        };
    }
}