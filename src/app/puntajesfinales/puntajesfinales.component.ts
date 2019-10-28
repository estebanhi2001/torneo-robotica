import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { UniversalvariablesService } from '../universalvariables.service';
import { Subscription } from 'rxjs';
import { DepFlags } from '@angular/compiler/src/core';

@Component({
  selector: 'app-puntajesfinales',
  templateUrl: './puntajesfinales.component.html',
  styleUrls: ['./puntajesfinales.component.css']
})
export class PuntajesFinalesComponent implements OnInit {
  private subscriptions = new Subscription();

  constructor(public uv: UniversalvariablesService) {
    this.uv.titulo = "Torneo Robótica - Desafíos";
  }

  ngOnInit() {
    this.uv.titulo = "Torneo Robótica - Ronda 2"
    this.subscriptions.add(this.uv.comp.subscribe(data => {
      data.forEach(function (e) {
        e.r1 = this.uv.reglas.puntajehitos[e.r1h] + (this.uv.reglas.puntajebonus * e.r1b) + (this.uv.reglas.puntajereinicio * e.r1r);
        e.r2 = this.uv.reglas.puntajehitos[e.r2h] + (this.uv.reglas.puntajebonus * e.r2b) + (this.uv.reglas.puntajereinicio * e.r2r);
        e.df = 5;
        e.d.forEach(function (i, idx, array) {
          e.df = e.df + ((i * this.uv.reglas.puntajedesafios[idx]) / 100);
        }, this);
        if (e.dr == true) {
          e.pf = "Nose We"
        } else {
          e.pf = e.r1 + e.r2;
        }
      }, this);
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }));

  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  displayedColumns = ['equipo', 'r1', 'de', 'r2', 'pt'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

export interface UserData {
  equipo: string;
  d: string;
  dt: number;
}

