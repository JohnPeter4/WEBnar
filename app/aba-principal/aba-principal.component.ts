import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-aba-principal',
  templateUrl: './aba-principal.component.html',
  styleUrls: ['./aba-principal.component.css']
})
export class AbaPrincipalComponent {
  constructor(private router: Router){}
  navigateToCurriculoFeed(){
    this.router.navigate(['/home/feed']);
  }
  navigateToCurriculoHome(){
    this.router.navigate(['/login']);
  }
}
