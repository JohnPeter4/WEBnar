import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-curriculo-eduardo',
  templateUrl: './curriculo-eduardo.component.html',
  styleUrls: ['./curriculo-eduardo.component.css']
})
export class CurriculoEduardoComponent {
  @Input() curriculo: any = {
    nome: 'Eduardo Vicente',
    contato: 'EDUSILVA@Hotmail.com',
    linkedin: 'linkedin.com/in/EduardoVicente',
    telefone: '(11) 1234-2444',
    endereco: 'Rua Narcoticos, 445, Santo André-SP',
    objetivo: 'A procura de oportunidade estágio ou efetivo" na área de T.I. e Análise e Desenvolvimento de Sistema, atualmente estou no 1°semestre do curso superior de A.D.S na universidade SENAI de São Caetano do Sul.',
    formacaoAcademica: [
      'Técnologo A.D.S - Senai São Caetano do Sul (2022-2023)',
      'TÉCNICO EM ELETROELETRÔNICA  - SENAI "A. JACOB LAFER (2004-2006)'
    ],
    habilidadesECompetencias: 'Desenvolvimento web, Banco de dados (Mysql), Java'
  };
}
