import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Params } from '@angular/router';
import { Serie } from 'src/models/Serie';
import { SeriesService } from '../services/series.service';

@Component({
  selector: 'app-seriecomponent',
  templateUrl: './seriecomponent.component.html',
 
})
export class SeriecomponentComponent implements OnInit {

  public serie : Serie
  constructor(private _active : ActivatedRoute , private _service : SeriesService) { }

  ngOnInit(): void {
    this._active.params.subscribe((params : Params) =>{
      var idSerie = params.idSerie;
      this._service.getSerie(idSerie).subscribe(res=>{
        this.serie = res
      })

    })
  }

}
