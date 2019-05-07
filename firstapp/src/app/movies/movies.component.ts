import { Component, OnInit } from '@angular/core';
import { MusicService } from './music.service';

@Component({
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  musicData: any[];
  constructor( private mservice: MusicService) { }

  ngOnInit(): void {
    this.mservice.getArtist()
      .subscribe((data) => { this.musicData = data[0].artists});
  }

}
