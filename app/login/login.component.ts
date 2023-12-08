import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CurriculoService } from '../curriculo.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  senha: string = '';
  mensagemErro: string = ''; // Novo campo para a mensagem de erro

  constructor(private router: Router, private authService: AuthService,private curriculo: CurriculoService){}
  navigateCadastro() {
    this.router.navigate(['/cadastro']);
  }
  navigateLogin(){

    this.curriculo;
    console.log(this.authService.verificarCredenciais)
    console.log("email ",this.email,"Senha",this.senha);
    this.authService.verificarCredenciais(this.email, this.senha).subscribe(
      autenticado => {
        if (autenticado) {
          console.log('Login bem-sucedido');
          this.router.navigate(['/home/feed']);
          // Faça algo após o login bem-sucedido
        } else {
          this.mensagemErro = 'Usuário ou senha inválidos'; // Define a mensagem de erro
          console.log('Credenciais inválidas');
        }
      },
      error => {
        this.mensagemErro = 'Erro ao verificar credenciais'; // Outra mensagem de erro genérica
        console.error('Erro ao verificar credenciais:', error);
      }
    );
    
  }
  //CADASTRO
  // Seu componente que usa o serviço


}
