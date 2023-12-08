import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurriculoService } from '../curriculo.service';
@Component({
  selector: 'app-curriculo',
  templateUrl: './curriculo.component.html',
  styleUrls: ['./curriculo.component.css']
})
export class CurriculoComponent {

constructor(private route: ActivatedRoute,private Dados: CurriculoService) { }

curriculo:any;
ngOnInit() {
this.curriculo = this.Dados.usuarios;
}

}
