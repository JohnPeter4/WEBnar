import { Component } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent {
  comentarios: { texto: string, autor: string }[] = [];
  novoComentario: string = '';

  adicionarComentario() {
    if (this.novoComentario.trim() !== '') {
      this.comentarios.push({ texto: this.novoComentario, autor: 'Usuário' });
      this.novoComentario = ''; // Limpa o campo do novo comentário
    }
  }
  removerComentario(index: number) {
    this.comentarios.splice(index, 1);
  }
}
