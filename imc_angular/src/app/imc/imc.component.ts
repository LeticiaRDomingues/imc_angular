import { Component } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class ImcComponent {
  //Atributos de classe/componente
  peso : number = 0;
  altura : number = 0;
  resp : number = 0;

  result(){

  }

}
