import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  news: object[];
  new: any;
  file: any;
  constructor(public newsService: NewsService) { }

  ngOnInit() {
    this.loadNews();
  }

  loadNews(): void {
    try {
      this.newsService.getlatestNews().subscribe(value => {
        this.news = value;
        this.new = this.news[0]['_embedded']['wp:featuredmedia'][0]['media_details']['file'];
        console.log(this.new);
        console.log(this.news[0]['_embedded']['wp:featuredmedia'][0]['media_details']['file']);
        
        
      })}
    catch (error) {
        err => console.log(err)

      }
}
}
