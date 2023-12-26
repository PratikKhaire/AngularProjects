import { Component } from '@angular/core';
import { SecondCompComponent } from '../second-comp/second-comp.component';

@Component({
  selector: 'app-frist-comp',
  standalone: true,
  imports: [SecondCompComponent],
  templateUrl: './frist-comp.component.html',
  styleUrl: './frist-comp.component.css'
})
export class FristCompComponent {

}
