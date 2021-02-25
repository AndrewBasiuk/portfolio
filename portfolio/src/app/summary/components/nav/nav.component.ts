import { Component, OnInit } from '@angular/core';
import { NAV_LIST } from './nav.config';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  navList = NAV_LIST;

  items: AngularFirestoreDocument<unknown>;

  constructor(
    db: AngularFirestore
  ) {
    this.items = db.collection('/data').doc();

    // console.log(this.items.snapshotChanges().subscribe());

    this.items.snapshotChanges().subscribe(item => { console.log(item); });

    // this.items.subscribe(item => {console.log(item)});
  }

  ngOnInit(): void {
  }

}
