import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aba-lateral',
  templateUrl: './aba-lateral.component.html',
  styleUrls: ['./aba-lateral.component.css']
})
export class AbaLateralComponent {
  constructor(private router: Router){}
  navigateToCurriculoAmanda(){
    this.router.navigate(['/home/Amanda']);
  }
  navigateToCurriculoDiego(){
    this.router.navigate(['/home/Diego']);
  }
  navigateToCurriculoEduardo(){
    this.router.navigate(['/home/Eduardo']);
  }
  navigateToCurriculoJoao(){
    this.router.navigate(['/home/Joao']);
  }
}
