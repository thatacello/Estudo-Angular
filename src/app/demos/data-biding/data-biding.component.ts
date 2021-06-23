import { Component } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html'
})
export class DataBidingComponent {

  public contadorClique: number = 0;
  public nome: string = "";
  
  public urlImagem: string = "https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg";

  adicionarClick(){
    this.contadorClique++;
  }

  zerarContador(){
    this.contadorClique = 0;
  }

  keyUp(event: any){
    this.nome = event.target.value;
  }
}
