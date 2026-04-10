import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  imports: [],
  templateUrl: './cards.html',
  styleUrl: './cards.css',
})
export class Cards {
  // 1. O titulo que estava faltando!
  tituloPrincipal = 'Why choose Tourz';

  // 2. A lista de bagagens no lugar certo
  diferenciais = [
    {
      icone: '/imagens/ticket.svg.png,',
      titulo: 'Ultimate flexibility',
      descricao: 'You re in control, with free cancellation...'
    },

     {
      icone: '/imagens/hot-air-balloon.svg.png',
      titulo: 'Memorable ecperiences',
      descricao: 'Browse and book tours and activitites...'
    },

    {
      icone: '/imagens/diamond.svg.png',
      titulo: 'Quality at our core',
      descricao: 'High-quality standards. Millions of reveiews...'
    },

     {
      icone: '/imagens/medal.svg.png',
      titulo: 'award-winning support',
      descricao: 'new price? New plan? No problem...'
    },

  ]

}
