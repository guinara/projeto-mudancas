import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  ano: number
  valorAnterior: number
  onInputChange(event: Event) {
    const valorAlterar = parseInt((event.target as HTMLInputElement).value, 10)
    const iceberg = document.getElementsByClassName("iceberg") as HTMLCollectionOf<HTMLElement>;
    if (valorAlterar > this.valorAnterior) {
      this.ano = this.ano + (valorAlterar - this.valorAnterior)
      let opacityValue = 1 - valorAlterar / 100;
      //mudar declaracao
      //@HostBinding('style.opaci') get color() { return this.control.valid ? 'green': 'red'; }
      //(element => {
      //  element.style.opacity = opacityValue
      //});
    }
    else {
      this.ano = this.ano - (this.valorAnterior - valorAlterar)
    }
    this.valorAnterior = valorAlterar
  }
  constructor() { this.ano = 1940, this.valorAnterior = 0 };
}
