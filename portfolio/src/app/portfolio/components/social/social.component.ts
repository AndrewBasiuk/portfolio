import {Component, Input, OnInit} from '@angular/core';
import {SOCIAL} from './social.config';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {

  @Input() animation = false;
  @Input() position: string = 'ver' || 'hor';
  @Input() color: string = 'white' || 'black';

  socialList = SOCIAL;

  constructor() { }

  ngOnInit(): void {
  }

}
