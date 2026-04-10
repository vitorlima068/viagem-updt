import { Component } from '@angular/core';

@Component({
  selector: 'app-locais',
  imports: [],
  templateUrl: './locais.html',
  styleUrl: './locais.css',
})
export class Locais {

  tituloMaior = 'Trending-destinations'

  diferenciais = [
    {
      img: './imagens/image.png'
      pais: 'paris'
      descricao: '100+ Tours'
    },


     {
      img: './imagens/singapore (2).png'
      pais: 'Singapore'
      descricao: '300+ Tours'
    },


  ]

}
