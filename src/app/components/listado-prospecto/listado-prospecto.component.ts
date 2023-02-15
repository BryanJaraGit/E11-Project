import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Prospecto } from 'src/app/interfaces/prospecto';


const listProspectos: Prospecto[] = [
  {nombres: 'Bryan Alfredo' ,apellidos: 'Flores Jara', telefono: 442276810, correo: '191271@utags.edu.mx', direccion: 'Paseos de Aguascalientes', servicio: 'Tv + Internet'},  
  {nombres: 'Bryan Alfredo' ,apellidos: 'Flores Jara', telefono: 442276810, correo: '191271@utags.edu.mx', direccion: 'Paseos de Aguascalientes', servicio: 'Tv + Internet'},  
  {nombres: 'Bryan Alfredo' ,apellidos: 'Flores Jara', telefono: 442276810, correo: '191271@utags.edu.mx', direccion: 'Paseos de Aguascalientes', servicio: 'Tv + Internet'},  
  {nombres: 'Mishel' ,apellidos: 'Flores Jara', telefono: 442276810, correo: '191271@utags.edu.mx', direccion: 'Paseos de Aguascalientes', servicio: 'Tv + Internet'},  
  {nombres: 'Bryan Alfredo' ,apellidos: 'Flores Jara', telefono: 442276810, correo: '191271@utags.edu.mx', direccion: 'Paseos de Aguascalientes', servicio: 'Tv + Internet'},  
  {nombres: 'Bryan Alfredo' ,apellidos: 'Flores Jara', telefono: 442276810, correo: '191271@utags.edu.mx', direccion: 'Paseos de Aguascalientes', servicio: 'Tv + Internet'}
];

@Component({
  selector: 'app-listado-prospecto',
  templateUrl: './listado-prospecto.component.html',
  styleUrls: ['./listado-prospecto.component.css']
})
export class ListadoProspectoComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['nombres', 'apellidos', 'telefono', 'correo', 'direccion', 'servicio', 'acciones'];
  dataSource = new MatTableDataSource<Prospecto>(listProspectos);
  loading: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginator._intl.itemsPerPageLabel = 'Items por pagina';
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarProspecto(){

    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this._snackBar.open('El prospecto fue eliminado con éxito', '', {
        duration: 3000,
        horizontalPosition: 'right'
      });
    }, 3000);
  }
}
