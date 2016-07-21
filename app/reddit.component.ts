import { Component } from '@angular/core';
import { ArticleComponent } from './reddit-article.component';

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
      <reddit-article></reddit-article>
    </div>
  `
})
export class RedditApp { 
  constructor() {

  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): void {
    console.log(`Adding article ${title.value} with link ${link.value}`);
  }
}