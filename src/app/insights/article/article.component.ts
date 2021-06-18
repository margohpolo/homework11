import { HttpClient } from '@angular/common/http';
// import { stringify } from '@angular/compiler/src/util';
import { Component, Input, OnInit, Output, SecurityContext } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { ActivatedRoute } from '@angular/router';
// import * as EventEmitter from 'events';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
// import { Pick } from './jsonpick';


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

// let maybeString = JSON.stringify({
//   "id": "supply-chain-transformation-cloud", 
//   "title": "Supply chain transformation on the cloud",
//   "date": "MAY 6, 2021",
//   "uri": "../../../assets/articles/supply-chain-transformation-cloud.md",
// });


// let AuthorsString
// let PeopleString = '[ {"id": "1", "name": "KRIS TIMMERMANS", "description": "Senior Managing Director – Strategy & Consulting, Supply Chain & Operations Global Lead", "linkedin": "kris-timmermans-209800", "twitter": "KrisTimmer"}, {"id": "2", "name": "DAVID SIMCHI-LEVI", "description": "Professor of Engineering Systems at MIT and Head of the MIT Data Science Lab", "linkedin": null, "twitter": null}, {"id": "3", "name": "TRACEY COUNTRYMAN", "description": "Senior Managing Director – Industry X, Digital Manufacturing & Operations, Global Lead", "linkedin": "tracey-countryman-2488a64", "twitter": "tcountryman"}, {"id": "4", "name": "FRANCOIS X. BOURBIGOT", "description": "Managing Director – Strategy & Consulting, Supply Chain & Operations", "linkedin": "francois-xavier-bourbigot-3080191", "twitter": null}, {"id": "5", "name": "JORDI PARIS", "description": "Managing Director – Strategy & Consulting, Supply Chain & Operations, Technology Strategy & Advisory", "linkedin": "jordi-paris-a787941", "twitter": null}, {"id": "6", "name": "KRISTINE RENKER", "description": "Managing Director – Strategy & Consulting, Supply Chain & Operations, Global", "linkedin": "kristine-renker-9764a92", "twitter": null}, {"id": "7", "name": "CRAIG GOTTLIEB", "description": "Managing Director – Strategy & Consulting, Aerospace & Defense, North America", "linkedin": "accentureaerospacecraiggottlieb", "twitter": "craiggottcc"}, {"id": "8", "name": "OLIVIER PROULX", "description": "Senior Consultant – Strategy & Consulting, Supply Chain & Operations", "linkedin": "olivier-proulx-44b210a4", "twitter": null}, {"id": "9", "name": "STEVE PURICELLI", "description": "Managing Director – Strategy & Consulting, Supply Chain & Operations", "linkedin": "steve-puricelli-07ab11", "twitter": null} ]';





// export interface personInterface {
//   id: string;
//   name: string;
//   description: string;
//   linkedin: string;
//   twitter: string;
// }

// export interface peopleStringInterface {
//   author: personInterface[];
// }


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  
  @Input('data1') data1:any;
  @Input('data2') data2:any;

  
  // peopleString: peopleStringInterface = JSON.parse(PeopleString);
  // findAuthors: Array<authorInterface> = this.authorsString.author.filter((e) => {return e.articles.filter((f) => {return f.articleid === 'supply-chain-transformation-cloud'})});
  // findString: any = this.authorsString.author.filter(e => {
  //   if ( e.articles.find(f => {return f.articleid === 'supply-chain-transformation-cloud'}) != undefined) { return e.name; }
  //   return undefined; 
  // });
  // findString: any = this.authorsString.author.map(e => e.articles.filter(f => f.articleid == 'supply-chain-transformation-cloud'));
  // findString: any = this.peopleString.author.map(e => () => {return e.articles.map(f => () => {return f.articleid == 'supply-chain-transformation-cloud';});});
  
  articleString:any;
  peopleString:any;

  constructor(private route: ActivatedRoute) {
    console.log("qpmk", this.route.snapshot.queryParamMap.keys);
    console.log("qpma", this.route.snapshot.queryParamMap.get('article'));
    console.log("qpmp", this.route.snapshot.queryParamMap.get('people'));
    // this.route.params.subscribe(data => {console.log(data)});
    // var {articleString, peopleString} = route.snapshot.queryParams;

  }
  // constructor() {}

  ngOnInit(): void {
    // console.log(this.peopleString);
    // console.log(typeof this.peopleString);
    // console.log(this.peopleString);
    // console.log(this.peopleString.author);
    // console.log(this.findString);
    console.log("qpm_article ", this.route.snapshot.queryParamMap.get('article'));
    console.log("qpm_people ", this.route.snapshot.queryParamMap.get('people'));
    console.log("this.data1", this.data1);
    console.log("this.articleString, this.peopleString   ", this.articleString, this.peopleString);
  }

}
