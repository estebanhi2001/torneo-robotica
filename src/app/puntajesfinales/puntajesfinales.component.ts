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

