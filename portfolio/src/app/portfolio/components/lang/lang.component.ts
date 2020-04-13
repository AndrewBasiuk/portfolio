import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-lang',
  templateUrl: './lang.component.html',
  styleUrls: ['./lang.component.scss']
})
export class LangComponent implements OnInit {

  @Input() vertical: true;

  constructor() { }

  ngOnInit(): void {
  }

}
