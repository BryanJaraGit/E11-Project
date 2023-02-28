import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Prospecto } from 'src/app/interfaces/prospecto';
import { ProspectoService } from 'src/app/services/prospecto.service';

@Component({
  selector: 'app-ver-prospecto',
  templateUrl: './ver-prospecto.component.html',
  styleUrls: ['./ver-prospecto.component.css']
})
export class VerProspectoComponent implements OnInit {
  id: number;
  prospecto!: Prospecto;
  loading: boolean = false;

  constructor(private _prospectoService: ProspectoService, private aRoute: ActivatedRoute) {
    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
   }

  ngOnInit(): void {
    this.obtenerProspecto();
  }

  obtenerProspecto(){
    this.loading = true;
    this._prospectoService.getProspecto(this.id).subscribe(data => {
      this.prospecto = data;   
      this.loading = false;   
    })
  }

}
