import { Component, OnInit } from '@angular/core';
import { NAV_LIST } from './nav.config';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {AngularFirestoreCollection} from '@angular/fire/firestore/collection/collection';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  navList = NAV_LIST;

  collection: AngularFirestoreCollection;
  doc: AngularFirestoreDocument;

  constructor(private db: AngularFirestore) {
    this.collection = this.db.collection(`summary`);
    this.doc = this.db.doc('summary/data');
  }

  getData(collectionId: string) {
    this.collection.valueChanges().subscribe((item) => {
      console.log(item);
    });
    this.doc.collection('angular').valueChanges().subscribe((item) => {
      console.log(item);
    });
  }

  setData(collectionId: string) {
    // this.collection.add({post: 3});
    // this.doc.update({post: 'new1'});
  }

  ngOnInit(): void {
  }

}
