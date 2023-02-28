import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { error } from 'console';
import { Prospecto } from 'src/app/interfaces/prospecto';
import { ProspectoService } from 'src/app/services/prospecto.service';

@Component({
  selector: 'app-listado-prospecto',
  templateUrl: './listado-prospecto.component.html',
  styleUrls: ['./listado-prospecto.component.css']
})
export class ListadoProspectoComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['nombres', 'apellidos', 'telefono', 'correo', 'direccion', 'servicio', 'acciones'];
  dataSource = new MatTableDataSource<Prospecto>();
  loading: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private _snackBar: MatSnackBar, private _prospectoService:ProspectoService) { }

  ngOnInit(): void {
    this.obtenerProspectos();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    if(this.dataSource.data.length > 0){
      this.paginator._intl.itemsPerPageLabel = 'Items por pagina';
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  obtenerProspectos() {
    this.loading = true;
    this._prospectoService.getProspectos().subscribe(data => {
      this.loading = false;
      this.dataSource.data = data;
    }, error => {
      this.loading = false;
      alert('Oppss ocurrio un error');
    })
  }

  eliminarProspecto(id: number){
    this.loading = true;

    this._prospectoService.deleteProspecto(id).subscribe(() => {
      this.mensajeExito();
      this.loading = false;
      this.obtenerProspectos();
    });
  }

  mensajeExito(){
    this._snackBar.open('El prospecto fue eliminado con éxito', '', {
      duration: 3000,
      horizontalPosition: 'right'
    });
  }
}
