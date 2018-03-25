import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../providers/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loading = true;
  banner:any;
  categories:any;
  constructor(public movies:MoviesService){
    this.movies.loadMovieHome().then(data=>{
      this.banner = data.banner;
      this.categories = data.categories;
      this.loading = false;
    }).catch(err=>{
      this.loading = false;
    });
  }

  ngOnInit() {
  }

}
