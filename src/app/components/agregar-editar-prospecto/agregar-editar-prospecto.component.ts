import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Prospecto } from 'src/app/interfaces/prospecto';
import { ProspectoService } from 'src/app/services/prospecto.service';

@Component({
  selector: 'app-agregar-editar-prospecto',
  templateUrl: './agregar-editar-prospecto.component.html',
  styleUrls: ['./agregar-editar-prospecto.component.css']
})
export class AgregarEditarProspectoComponent implements OnInit {
  
  loading: boolean = false;
  form: FormGroup;
  id: number;
  operacion: string = "Crear";

  servicios = ['Sky Hd Prepago','Sky Hd Silver','Sky Hd Gold','Sky Hd Platinum','Combo Sky Hd Prepago + BTI 5MB','Combo Sky Hd Prepago + BTI 10MB'];
  selectVal: string = "";

  constructor(private fb:FormBuilder, private _ProspectoService:ProspectoService, private _snackBar:MatSnackBar, private router:Router, private aRoute:ActivatedRoute) {
    this.form = this.fb.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      telefono: ['', Validators.required],
      correo: ['', Validators.required],
      direccion: ['', Validators.required],
      servicio: ['', Validators.required],
    })

    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
   }

  ngOnInit(): void {
    if(this.id != 0){
      this.operacion = "Editar";
      this.obtenerProspecto(this.id);
    }
  }

  obtenerProspecto(id:number){
    this.loading = true;
    this._ProspectoService.getProspecto(id).subscribe(data => {
      this.form.setValue({
        nombres: data.nombres,
        apellidos: data.apellidos,
        telefono: data.telefono,
        correo: data.correo,
        direccion: data.direccion,
        servicio: data.servicio
      })

      this.loading = false;
    })
  }

  agregarEditarProspecto(){
    
    // Armamos el objeto
    const prospecto: Prospecto = {
      nombres: this.form.value.nombres,
      apellidos: this.form.value.apellidos,
      telefono: this.form.value.telefono,
      correo: this.form.value.correo,
      direccion: this.form.value.direccion,
      servicio: this.form.value.servicio,
    }
    
    if(this.id != 0){
      prospecto.id = this.id;
      this.editarProspecto(this.id, prospecto);
    }else{
      this.agregarProspecto(prospecto);
    }
    
  }

  agregarProspecto(prospecto:Prospecto){
    // Enviamos el objeto al Backend
    this._ProspectoService.addProspecto(prospecto).subscribe(data => {
    this.mensajeExito('registrado');      
    this.router.navigate(['/listProspecto']);
    })
  }

  editarProspecto(id: number, prospecto:Prospecto){
    this.loading = true;
    this._ProspectoService.updateProspecto(id, prospecto).subscribe(() => {
      this.loading = false;
      this.mensajeExito('actualizado');      
      this.router.navigate(['/listProspecto']);
    })
  }

  mensajeExito(text:string){
    this._snackBar.open(`El prospecto fue ${text} con éxito!`, '', {
      duration: 3000,
      horizontalPosition: 'right'
    });
  }


}
