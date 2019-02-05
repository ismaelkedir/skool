import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from '../article.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.sass']
})
export class ArticleDetailComponent implements OnInit {

  article: Article;

  constructor(private router: ActivatedRoute, private _articleService: ArticleService) { }

  ngOnInit() {
    //  Get the article id from the param passed in the URL
    this.router.params.subscribe(params => {
      let id = params['id'];
      // Call the service that gets the article with the specified id
      this._articleService.getOne(id).subscribe(article => {
        // Assign the fetched article to the article object
        this.article = article;
      })
    })
  }

}
