import { Component } from '@angular/core';
import { ArticleComponent } from './reddit-article.component';
import { Article } from './reddit-article';

@Component({
  selector: 'reddit',
  directives: [ArticleComponent],
  template:  `
    <form class="ui large form segment">
      <h3 class="ui header">Add a Link</h3>

      <div class="field">
        <label for="title">Title:</label>
        <input name="title" #newTitle />
      </div>
      <div class="field">
        <label for="link">Link:</label>
        <input name="link" #newLink />
      </div>

      <button (click)="addArticle(newTitle, newLink)"
        class="ui positive right floated button">
        Submit link
      </button>
    </form>

    <div class="ui grid posts">
      <reddit-article
        *ngFor="let article of sortedArticles()"
        [article]="article">
      </reddit-article>
    </div>
  `
})
export class RedditApp {
  articles: Article[];

  constructor() {
    this.articles = [
      new Article('ng2', 'http://ng2.lol', 8),
      new Article('rx', 'http://rx.lol', 6),
      new Article('gql', 'http://gql.lol', 7),
    ]
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes );
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): void {
    console.log(`Adding article ${title.value} with link ${link.value}`);
    this.articles.push(new Article(title.value, link.value));
    title.value = '';
    link.value = '';
  }
}