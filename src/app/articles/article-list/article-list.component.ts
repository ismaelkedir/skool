import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.sass']
})
export class ArticleListComponent implements OnInit {

  articles = [];

  constructor(private _articleService: ArticleService) { }

  ngOnInit() {
    this._articleService.getAll().subscribe((articles) => {
      this.articles = articles
    })
  }

}
