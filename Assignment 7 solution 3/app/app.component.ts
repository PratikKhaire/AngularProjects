import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 buttonText: string = 'Marvellous Infosystems';

  fun(): void {
    if (this.buttonText === 'Marvellous Infosystems') {
      this.buttonText = 'Educating for Better tomorrow';
    } else {
      this.buttonText = 'Marvellous Infosystems';
    }
  }
}
