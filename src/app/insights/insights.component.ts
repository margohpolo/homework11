import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

let ArticlesString = { "id": "supply-chain-trans", "business": "Strategy & Consulting", 
  "category": "Supply Chain & Operations", "title": "Supply chain transformation on the cloud", "date": "MAY 6, 2021", 
  "uri": "/assets/articles/supply-chain-transformation-cloud.md"
};

let People = [ {"id": "1", "name": "KRIS TIMMERMANS", "description": "Senior Managing Director – Strategy & Consulting, Supply Chain & Operations Global Lead", "linkedin": "kris-timmermans-209800", "twitter": "KrisTimmer"}, 
  {"id": "2", "name": "DAVID SIMCHI-LEVI", "description": "Professor of Engineering Systems at MIT and Head of the MIT Data Science Lab", "linkedin": undefined, "twitter": undefined}, 
  {"id": "3", "name": "TRACEY COUNTRYMAN", "description": "Senior Managing Director – Industry X, Digital Manufacturing & Operations, Global Lead", "linkedin": "tracey-countryman-2488a64", "twitter": "tcountryman"}, 
  {"id": "4", "name": "FRANCOIS X. BOURBIGOT", "description": "Managing Director – Strategy & Consulting, Supply Chain & Operations", "linkedin": "francois-xavier-bourbigot-3080191", "twitter": undefined}, 
  {"id": "5", "name": "JORDI PARIS", "description": "Managing Director – Strategy & Consulting, Supply Chain & Operations, Technology Strategy & Advisory", "linkedin": "jordi-paris-a787941", "twitter": undefined}, 
  {"id": "6", "name": "KRISTINE RENKER", "description": "Managing Director – Strategy & Consulting, Supply Chain & Operations, Global", "linkedin": "kristine-renker-9764a92", "twitter": undefined}
];

let otherPeople = [ {"id": "7", "name": "CRAIG GOTTLIEB", "description": "Managing Director – Strategy & Consulting, Aerospace & Defense, North America", "linkedin": "accentureaerospacecraiggottlieb", "twitter": "craiggottcc"}, 
  {"id": "8", "name": "OLIVIER PROULX", "description": "Senior Consultant – Strategy & Consulting, Supply Chain & Operations", "linkedin": "olivier-proulx-44b210a4", "twitter": undefined}, 
  {"id": "9", "name": "STEVE PURICELLI", "description": "Managing Director – Strategy & Consulting, Supply Chain & Operations", "linkedin": "steve-puricelli-07ab11", "twitter": undefined} ]


@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.scss']
})
export class InsightsComponent implements OnInit {


  constructor(private router: Router) { }  

  articlesString = ArticlesString;
  peopleString = People;
  
  route() {
    event?.preventDefault();
    this.router.navigate([('/article/' + this.articlesString.id), {queryParams : {article: this.articlesString, people: this.peopleString}}]);
  }


  ngOnInit(): void {
 
    console.log(typeof this.articlesString.id, this.articlesString.id);
    console.log(this.articlesString, this.peopleString);
  }


}
