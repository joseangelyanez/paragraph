import { Injectable } from "@angular/core";
import { WorksFacadeService } from "./works-facade.service";



@Injectable()
export class WordAnalyzerService {
    constructor(protected facade:WorksFacadeService){}

    
}