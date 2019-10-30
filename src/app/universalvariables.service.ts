import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Resolve } from '@angular/router';
import { async } from 'q';


@Injectable({
  providedIn: 'root'
})
export class UniversalvariablesService {
  titulo: String = "Torneo Robótica"
  loading: boolean = false;
  comp: Observable<Observable<Comp[]>>;
  reglas: DocumentData;
  x: string;

  constructor(public db: AngularFirestore) {
    this.comp = db.doc<Comp>('reglas/yJINGtQ3KEP2gpytpdbA').get().pipe(
      map(
        reglas => {
          return db.collection<Comp>('competencia', ref => ref.orderBy("a", "desc")).valueChanges({ idField: 'eq' }).pipe(
            map(
              a => {
                a.forEach(function (b) {
                  b.ppe = 1;
                  b.mrh = 0;
                  b.t = 0;
                  b.r.forEach(c => {
                    c.p = {
                      b: reglas.data().puntajebonus * c.b,
                      h: reglas.data().puntajehitos[c.h],
                      r: reglas.data().puntajereinicio * c.r,
                      t: reglas.data().puntajehitos[c.h] + (reglas.data().puntajebonus * c.b) + (reglas.data().puntajereinicio * c.r)
                    }
                    b.t = b.t + c.p.t;
                    if (b.mrh < c.p.t) {
                      b.mrh = c.p.t
                    }
                  }, this);
                  b.ds = "";
                  b.dt = 5;
                  b.d.forEach(function (i, idx, array) {
                    b.dt = b.dt + ((i * reglas.data().puntajedesafios[idx]) / 100);
                    if (idx === array.length - 1) {
                      b.ds = b.ds + " " + i + "%";
                    } else {
                      b.ds = b.ds + " " + i + "% -";
                    }
                  }, this);
                  b.ren = (b.mrh * 100) / reglas.data().puntajehitos[reglas.data().puntajehitos.length-1];
                  if(b.dt<b.ren && b.dr){
                    b.ppe = b.dt/b.ren
                  }
                  b.t = b.t * b.ppe
                }, this);
                return a;
              }
            )
          )
        }
      )
    )

  }
}

export interface Comp {
  eq: string;
  ds: string;
  d: [number];
  dt: number;
  r: Ronda[];
  t: number,
  dr: boolean,
  mrh: number,
  ren: number,
  ppe: number
}

export interface Ronda {
  b: number,
  h: number,
  r: number,
  p: {
    b: number,
    h: number,
    r: number,
    t: number
  }
}
