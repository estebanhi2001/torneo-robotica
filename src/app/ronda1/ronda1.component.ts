import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { UniversalvariablesService } from '../universalvariables.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ronda1',
  templateUrl: './ronda1.component.html',
  styleUrls: ['./ronda1.component.css']
})
export class Ronda1Component implements OnInit {
  private subscriptions = new Subscription();

  constructor(public uv: UniversalvariablesService) { }

  ngOnInit() {
    this.uv.titulo = "Torneo Robótica - Ronda 1"
    this.subscriptions.add(this.uv.comp.subscribe(data => {
      data.forEach(function (e) {
        e.r1f = this.uv.reglas.puntajehitos[e.r1h] + (this.uv.reglas.puntajebonus * e.r1b) + (this.uv.reglas.puntajereinicio * e.r1r);
      }, this);
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }));

  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  displayedColumns = ['equipo', 'r1h', 'r1b', 'r1r', 'r1f'];
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
  r1h: number;
  r1b: number;
  r1r: number;
  r1f: number;
}
