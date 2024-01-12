import { Component } from '@angular/core';

@Component({
  selector: 'app-buttontext',
  standalone: true,
  imports: [],
  templateUrl: './buttontext.component.html',
  styleUrl: './buttontext.component.css'
})
export class ButtontextComponent {
   
   public value : string = "Marvellous infosystem" ;
   public disText : any ;
   public Onclick(name : string) : void {
      if(name=='A')
      {
        this.disText= this.value.toUpperCase();

      }
      else if (name =='B')
      {
        this.disText =  this.value.toLocaleLowerCase();
      }
   }
   
}
