import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { firestore } from 'firebase';



@Injectable({
  providedIn: 'root'
})
export class UniversalvariablesService {
  titulo: String = "Torneo Robótica"

  comp: Observable<any[]>;
  reglas: DocumentData;

  constructor(public db: AngularFirestore) {

    this.comp = db.collection('competencia').valueChanges({ idField: 'equipo' });
    db.doc<any[]>('reglas/yJINGtQ3KEP2gpytpdbA').get().subscribe(
      reglas => this.reglas = reglas.data()
    );


  }
}
