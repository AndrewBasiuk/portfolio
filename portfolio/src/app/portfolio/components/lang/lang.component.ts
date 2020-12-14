import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-lang',
  templateUrl: './lang.component.html',
  styleUrls: ['./lang.component.scss']
})
export class LangComponent {

  @Input() revertColor?: boolean | null;
  @Input() animation = false;
  @Input() align: string = 'ver' || 'hor';

}
