import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-scorer',
  imports: [],
  templateUrl: './scorer.html',
  styleUrl: './scorer.css',
})
export class Scorer {
  @Input() score: number = 0;
  @Input() name: string = "";
}
