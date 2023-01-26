import { Component, OnInit } from '@angular/core';
import { Prospecto } from 'src/app/interfaces/prospecto';


const ELEMENT_DATA: Prospecto[] = [
    
];

@Component({
  selector: 'app-listado-prospecto',
  templateUrl: './listado-prospecto.component.html',
  styleUrls: ['./listado-prospecto.component.css']
})
export class ListadoProspectoComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
