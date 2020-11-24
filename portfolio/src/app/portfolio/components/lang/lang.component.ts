import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-lang',
  templateUrl: './lang.component.html',
  styleUrls: ['./lang.component.scss']
})
export class LangComponent implements OnInit {

  @Input() animation = false;
  @Input() align: string = 'ver' || 'hor';

  constructor() { }

  ngOnInit(): void {
  }

}
