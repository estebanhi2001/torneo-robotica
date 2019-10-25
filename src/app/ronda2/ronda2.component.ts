import { Component, OnInit } from '@angular/core';
import { UniversalvariablesService } from '../universalvariables.service';

@Component({
  selector: 'app-ronda2',
  templateUrl: './ronda2.component.html',
  styleUrls: ['./ronda2.component.css']
})
export class Ronda2Component implements OnInit {
  constructor(public uv : UniversalvariablesService) { 
    this.uv.titulo = "Torneo Robótica - Ronda 2"
   }

  ngOnInit() {
  }

}
