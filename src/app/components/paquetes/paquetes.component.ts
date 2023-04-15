import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';

@Component({
  selector: 'app-paquetes',
  templateUrl: './paquetes.component.html',
  styleUrls: ['./paquetes.component.css']
})
export class PaquetesComponent implements OnInit {

  
  constructor(private matDialog: MatDialog) { }

  openDialog(){
    this.matDialog.open(DialogBodyComponent,{
      width:'350px',
    })
  }

  ngOnInit(): void {
  }

}
