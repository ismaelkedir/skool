import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestService } from '../services/rest-service';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService extends RestService<Article>{

  constructor(http: HttpClient) {
    // Inherit the parent methods for the /articles endpoint
    super(http, '/articles');
  }
}
