import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root',
})
export class NewsService {

  apiKey = '8656094240d143fabeacb5fbfde1d1ca';
  constructor(private http:HttpClient) {

  }

  initSources(){
    return this.http.get(
      'https://newsapi.org/v2/sources?language=en&apiKey='+
        this.apiKey
    );

  }

  getArticleById(source:string){
    return this.http.get("https://newsapi.org/v2/top-headlines?sources="+source+this.apiKey);
  };

  initArticles(){
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='+this.apiKey)
  }
}
