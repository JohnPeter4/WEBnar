// cadastro.component.ts

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService,private router: Router ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  cadastrarUsuario() {
    console.log("CADASTROOOO")
    if (this.registerForm.valid) {
      const { name, email, password } = this.registerForm.value;
      this.authService.cadastrarUsuario(email, password).subscribe((resultado) => {
        if (resultado) {
          console.log('Usuário cadastrado com sucesso!');
          this.router.navigate(['/login']);
          // Adicione lógica para navegar para a página de login ou fazer outra coisa após o cadastro
        } else {
          console.error('Falha ao cadastrar usuário');
        }
      });
    }
  }
}
