import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  // 1. O título que estava faltando!
  tituloPrincipal = 'Why choose Tourz';

  // 2. A lista de bagagens no lugar certo
  diferenciais = [
    {
      icone: '/cards/ticket.svg fill.png',
      titulo: 'Ultimate flexibility',
      descricao: "You're in control, with free cancellation..."
    },
    {
      icone: '/cards/hot-air-balloon.svg fill.png',
      titulo: 'Memorable experiences',
      descricao: 'Browse and book tours and activities...'
    },
    {
      icone: '/cards/diamond.svg fill.png',
      titulo: 'Quality at our core',
      descricao: 'High-quality standards. Millions of reviews...'
    }
  ];

}
