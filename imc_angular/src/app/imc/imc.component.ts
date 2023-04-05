import { Component } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})

export class ImcComponent {

  altura : number = 0;
  peso : number = 0;
  resp : number = 0;

  resultado : string = '';

  result(){
    this.resp = this.peso / ((this.altura/100)*(this.altura/100));
    this.resp = parseFloat(this.resp.toFixed(2));


    if(this.resp < 18.5){
      this.resultado = 'Magreza!!';
    }
    else if(this.resp < 25){
    this.resultado = 'Normal!!';
    }
    else if(this.resp < 30){
    this.resultado = 'sobrepeso!!';
    }
    else if(this.resp < 40){
    this.resultado = 'Obesidade II!!';
    }
    else if(this.resp > 40){
    this.resultado = 'Obesidade III!!';
    }
  }
}

