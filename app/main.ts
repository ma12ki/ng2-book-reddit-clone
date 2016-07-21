import { bootstrap }    from '@angular/platform-browser-dynamic';
import { RedditApp } from './reddit.component';

bootstrap(RedditApp, [])
    .catch(err => console.error(err));
