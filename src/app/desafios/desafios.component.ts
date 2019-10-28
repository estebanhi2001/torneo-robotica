

import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { UniversalvariablesService } from '../universalvariables.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-desafios',
  templateUrl: './desafios.component.html',
  styleUrls: ['./desafios.component.css']
})
export class DesafiosComponent implements OnInit {
  private subscriptions = new Subscription();

  constructor(public uv: UniversalvariablesService) {
    this.uv.titulo = "Torneo Robótica - Desafíos";
  }

  ngOnInit() {
    this.uv.titulo = "Torneo Robótica - Ronda 2"
    this.subscriptions.add(this.uv.comp.subscribe(data => {
      data.forEach(function (e) {
        e.di = "";
        e.df = 5;
        e.d.forEach(function (i, idx, array) {
          e.df = e.df + ((i*this.uv.reglas.puntajedesafios[idx])/100);
          if (idx === array.length - 1) {
            e.di = e.di + " " + i + "%";
          } else {
            e.di = e.di + " " + i + "% -";
          }
        }, this);
      }, this);
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }));

  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  displayedColumns = ['equipo', 'd', 'dt'];
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

