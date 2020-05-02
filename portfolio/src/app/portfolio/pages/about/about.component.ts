import { Component, OnInit } from '@angular/core';
import {ADDITIONAL_SKILL, MAIN_SKILL} from './about.config';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  mainSkill = MAIN_SKILL;
  addSkill = ADDITIONAL_SKILL;

  constructor() { }

  ngOnInit(): void {
  }

}
