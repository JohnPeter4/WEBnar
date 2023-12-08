import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-curriculo-diego',
  templateUrl: './curriculo-diego.component.html',
  styleUrls: ['./curriculo-diego.component.css']
})
export class CurriculoDiegoComponent {
  @Input() curriculo: any = {
    nome: 'Diego Condemarim',
    contato: 'guayacan.sistemas@hotmail.com',
    linkedin: 'linkedin.com/in/DiegoConderamin',
    telefone: '(11) 1234-9999',
    endereco: 'Rua Davinti, 453, São Caetano do Sul-SP',
    objetivo: 'aberto para novas opurtunidades e experiências',
    formacaoAcademica: [
      'Spring Mobile Solutions -(Atualmente)',
      'Capgemini Tim (06/2019 - 07/2019)',
      'Dxc Technology (2016 - 2017)'
    ],
    habilidadesECompetencias: 'Desenvolvimento web, Design, Vendas, HTML, CSS'
  };
}
