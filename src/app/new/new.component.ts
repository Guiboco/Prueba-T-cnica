import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NewsService } from '../news.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  new : object[];
  constructor(private route: ActivatedRoute,private newsServices: NewsService) { }

  ngOnInit() {this.route.params.subscribe(params => {
    this.newsServices.getNewById(params.id).subscribe(value =>{ 
    this.new = value; 
    console.log(this.new);})
  })}

}
