import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/models/Serie';
import { SeriesService } from '../services/series.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  public series : Array<Serie>;
  constructor(
    private _service : SeriesService
  ) { }

  ngOnInit(): void {
    this.getSeries();

  }
  getSeries(){

    this._service.getSeries().subscribe(res=>{
      console.log(res);
      this.series = res
    })
  }

}
