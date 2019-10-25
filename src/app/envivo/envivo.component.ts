import { Component, OnInit } from '@angular/core';
import { UniversalvariablesService } from '../universalvariables.service';

@Component({
  selector: 'app-envivo',
  templateUrl: './envivo.component.html',
  styleUrls: ['./envivo.component.css']
})
export class EnvivoComponent implements OnInit {

  constructor(public uv : UniversalvariablesService) { 
    this.uv.titulo = "Torneo Robótica - En Vivo"
   }

  ngOnInit() {
  }

}
