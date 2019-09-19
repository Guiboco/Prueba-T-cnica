import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  news:object[];

  constructor(public newsService: NewsService) { }

  ngOnInit() {
    this.loadNews();
  }

loadNews():void{
  this.newsService.getlatestNews().subscribe(value=> {
    this.news = value;
    console.log(this.news);
}, err=>console.log(err))
}}
