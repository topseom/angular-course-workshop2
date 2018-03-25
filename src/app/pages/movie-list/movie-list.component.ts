import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../providers/movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  list:any;
  loading = true;
  constructor(public movies:MoviesService,public route:ActivatedRoute){ 
    this.route.params.subscribe(data=>{
      if(data['id']){
        this.movies.loadMovieList(data['id']).then(data=>{
          this.list = data;
          this.loading = false;
        }).catch(err=>{
          this.loading = false;
        })
      }
    });
  }

  ngOnInit() {
  }

}
