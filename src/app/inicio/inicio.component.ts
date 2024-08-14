import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent {
  ano: number
  opacityValue: number
  opacityValueIceGrande: number
  textoFinal: boolean
  fimUrsopai: boolean
  onInputChange(event: Event) {
    const valorAlterar = parseInt((event.target as HTMLInputElement).value, 10)
    this.ano = 1940 + valorAlterar
    this.opacityValue = 1 - valorAlterar / 100;
    //codigo para pegar os elementos
    const dom: HTMLElement = this.elementRef.nativeElement;
    const elements = dom.getElementsByClassName('iceberg')
    for (var i = 0, m = elements.length; i < m; i++) {
      let element = elements[i];
      element.setAttribute("style", "opacity:" + this.opacityValue)
    }
    this.opacityValueIceGrande = this.opacityValue * 3
    if (valorAlterar > 90) {
      this.textoFinal = true
    }
    else if (valorAlterar > 65) {
      this.fimUrsopai = true
    }
    else {
      this.textoFinal = false
      this.fimUrsopai = false
    }
  }

  constructor(private elementRef: ElementRef) { this.ano = 1940, this.opacityValue = 1, this.opacityValueIceGrande = 1, this.textoFinal = false, this.fimUrsopai = false };
}
