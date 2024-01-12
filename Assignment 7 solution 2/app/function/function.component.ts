import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [],
  templateUrl: './function.component.html',
  styleUrl: './function.component.css'
})
export class FunctionComponent {
 
  fun(): string {
    return 'Marvellous Infosystems';
  }


  publicFunction(): string {
    return 'This is a public function';
  }
}
