import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-curriculo-amanda',
  templateUrl: './curriculo-amanda.component.html',
  styleUrls: ['./curriculo-amanda.component.css']
})
export class CurriculoAmandaComponent {
  @Input() curriculo: any = {
    nome: 'Amanda Ramos',
    contato: ' contato.amandarsiqueira@outlook.com',
    linkedin: 'linkedin.com/in/AmandaRamos',
    telefone: '(11) 5232-3214',
    endereco: 'Mauá-SP',
    objetivo: 'Tenho 20 anos, atualmente moro em Mauá-SP. Possuo formação técnica em mecatrônica e estou no 4° semestre do superior de ADS (Análise e desenvolvimento de sistemas). Sou uma pessoa muito curiosa, criativa e determinada.',
    formacaoAcademica: [
      'Superior em Análise e desenvolvimento de sistemas (2022-2023)',
      'Colégio Técnico elevação (2020',
      'Técnico em Mecatrônica - Senai Armando de Arruda Perreira (2020 - 2021)'
    ],
    habilidadesECompetencias: 'Desenvolvimento web, React, Node.js, HTML, CSS, Design'
  };
}
