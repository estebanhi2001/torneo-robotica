import { Component, OnInit } from '@angular/core';
import { UniversalvariablesService } from '../universalvariables.service';

@Component({
  selector: 'app-desafios',
  templateUrl: './desafios.component.html',
  styleUrls: ['./desafios.component.css']
})
export class DesafiosComponent implements OnInit {

  constructor(public uv : UniversalvariablesService) { 
    this.uv.titulo="Torneo Robótica - Desafíos";
  }

  ngOnInit() {
  }

}
