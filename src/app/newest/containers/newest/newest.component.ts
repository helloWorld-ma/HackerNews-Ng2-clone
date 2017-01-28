import { Component, OnInit } from '@angular/core';
import { HackerNewsService } from '../../../shared/services/services.module';
import { FirebaseListObservable } from 'angularfire2';
import { Observable  } from 'rxjs';

@Component({
  selector: 'hn-newest',
  templateUrl: './newest.component.html',
  styleUrls: ['./newest.component.scss']
})
export class NewestComponent implements OnInit {

  newestStories: Observable<any>;

  private limit: number = 100;

  constructor(private hackerNewsService: HackerNewsService) { }

  ngOnInit() {

    this.newestStories = this.hackerNewsService.getNewestStories(this.limit);

  }

  trackByForStory(index: number, item: any) {
    return item.id;
  }


}
