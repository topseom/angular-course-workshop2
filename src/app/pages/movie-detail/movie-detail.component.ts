import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../providers/movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  detail:any;
  loading = true;
  constructor(public route:ActivatedRoute,public movies:MoviesService){ 
    this.route.params.subscribe(data=>{
      if(data['id']){
        this.movies.loadMovieDetail(data['id']).then(data=>{
          this.detail = data;
          this.loading = false;
        },(err)=>{
          this.loading = false;
        });
      }
    })
  }

  ngOnInit() {
  }

}
