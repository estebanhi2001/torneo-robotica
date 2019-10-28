

import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { UniversalvariablesService } from '../universalvariables.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ronda2',
  templateUrl: './ronda2.component.html',
  styleUrls: ['./ronda2.component.css']
})
export class Ronda2Component implements OnInit {
  private subscriptions = new Subscription();

  constructor(public uv: UniversalvariablesService) {}

  ngOnInit() {
    this.uv.titulo = "Torneo Robótica - Ronda 2"
    this.subscriptions.add(this.uv.comp.subscribe(data => {
      data.forEach(function (e) {
        e.r2f = this.uv.reglas.puntajehitos[e.r2h] + (this.uv.reglas.puntajebonus * e.r2b) + (this.uv.reglas.puntajereinicio * e.r2r);
      }, this);
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }));

  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  displayedColumns = ['equipo', 'r2h', 'r2b', 'r2r', 'r2f'];
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
  r2h: number;
  r2b: number;
  r2r: number;
  r2f: number;
}
