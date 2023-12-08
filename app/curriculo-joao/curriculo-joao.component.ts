import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-curriculo-joao',
  templateUrl: './curriculo-joao.component.html',
  styleUrls: ['./curriculo-joao.component.css']
})

export class  CurriculoJoaoComponent {
  @Input() curriculo: any = {
    nome: 'João Pedro Gonçalves Camusso',
    contato: 'joao.camusso4@email.com',
    linkedin: 'linkedin.com/in/joaopedro',
    telefone: '(11) 1234-5678',
    endereco: 'Rua Napoleão, 123, Cidade-SP',
    objetivo: 'Em busca de oportunidades na área de desenvolvimento de software',
    formacaoAcademica: [
      'Bacharel em Ciência da Computação - Universidade Exemplo (2018-2022)',
      'Curso Técnico em Desenvolvimento de Software - Escola Técnica Exemplo (2016-2018)'
    ],
    habilidadesECompetencias: 'Desenvolvimento web, JavaScript, Angular, Node.js, HTML, CSS, Git'
  };
}