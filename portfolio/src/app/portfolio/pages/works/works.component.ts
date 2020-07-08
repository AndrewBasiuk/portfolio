import { Component, OnInit } from '@angular/core';
import {WORKS_LIST} from './works.config';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {

  list = WORKS_LIST;

  constructor() { }

  ngOnInit(): void {
  }

}
