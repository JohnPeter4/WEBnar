import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-avisos',
  templateUrl: './avisos.component.html',
  styleUrls: ['./avisos.component.css']
})
export class AvisosComponent {
  constructor(private router: Router){}
  
  curriculo = '../../assets/CurriculoMilano.json'
   redirectToLinkedIn(){
    window.location.href = 'https://www.linkedin.com/feed/';
    this.router.navigate(['https://www.linkedin.com/feed/']);
   }
}
