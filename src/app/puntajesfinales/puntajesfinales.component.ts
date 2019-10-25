import { Component, OnInit } from '@angular/core';
import { UniversalvariablesService } from '../universalvariables.service';

@Component({
  selector: 'app-puntajesfinales',
  templateUrl: './puntajesfinales.component.html',
  styleUrls: ['./puntajesfinales.component.css']
})
export class PuntajesFinalesComponent implements OnInit {

  constructor(public uv : UniversalvariablesService) { 
    this.uv.titulo = "Torneo Robótica - Puntaje Final"
   }

  ngOnInit() {
  }

}
