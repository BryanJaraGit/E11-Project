import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Prospecto } from 'src/app/interfaces/prospecto';
import { ProspectoService } from 'src/app/services/prospecto.service';

@Component({
  selector: 'app-agregar-editar-prospecto',
  templateUrl: './agregar-editar-prospecto.component.html',
  styleUrls: ['./agregar-editar-prospecto.component.css']
})
export class AgregarEditarProspectoComponent implements OnInit {
  
  loading: boolean = false;
  form: FormGroup

  servicios = ['Sky Hd Prepago','Sky Hd Silver','Sky Hd Gold','Sky Hd Platinum','Combo Sky Hd Prepago + BTI 5MB','Combo Sky Hd Prepago + BTI 10MB'];
  selectVal: string = "";

  constructor(private fb:FormBuilder, private _ProspectoService:ProspectoService) {
    this.form = this.fb.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      telefono: ['', Validators.required],
      correo: ['', Validators.required],
      direccion: ['', Validators.required],
      servicio: ['', Validators.required],
    })
   }

  ngOnInit(): void {
  }

  agregarProspecto(){
    
    // Armamos el objeto
    const prospecto: Prospecto = {
      nombres: this.form.value.nombres,
      apellidos: this.form.value.apellidos,
      telefono: this.form.value.telefono,
      correo: this.form.value.correo,
      direccion: this.form.value.direccion,
      servicio: this.form.value.servicio,
    }
    
    // Enviamos el objeto al Backend
    this._ProspectoService.addProspecto(prospecto).subscribe(data => {
      console.log(data);
      
    })
  }


}
