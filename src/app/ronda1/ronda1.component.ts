import { Component, OnInit } from '@angular/core';
import { UniversalvariablesService } from '../universalvariables.service';

@Component({
  selector: 'app-ronda1',
  templateUrl: './ronda1.component.html',
  styleUrls: ['./ronda1.component.css']
})
export class Ronda1Component implements OnInit {

  constructor(public uv : UniversalvariablesService) { 
    this.uv.titulo = "Torneo Robótica - Ronda 1"
   }

  ngOnInit() {
  }

}
