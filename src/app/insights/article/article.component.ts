import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output, SecurityContext } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';


MarkdownModule.forRoot({
  loader: HttpClient,
  sanitize: SecurityContext.HTML,
  markedOptions: {
    provide: MarkedOptions,
    useValue: {
      gfm: true,
      breaks: false,
      pedantic: false,
      smartLists: true,
      smartypants: false,
    }
  },
});


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  
  @Input('data1') data1:any;
  @Input('data2') data2:any;

  
  articleString:any;
  peopleString:any;

  constructor(private route: ActivatedRoute) {
    console.log("qpmk", this.route.snapshot.queryParamMap.keys);
    console.log("qpma", this.route.snapshot.queryParamMap.get('article'));
    console.log("qpmp", this.route.snapshot.queryParamMap.get('people'));

  }


  ngOnInit(): void {

    console.log("qpm_article ", this.route.snapshot.queryParamMap.get('article'));
    console.log("qpm_people ", this.route.snapshot.queryParamMap.get('people'));
    console.log("this.data1", this.data1);
    console.log("this.articleString, this.peopleString   ", this.articleString, this.peopleString);
  }

}
