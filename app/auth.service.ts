// auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuariosUrl = 'assets/dados.json';
  private usuarios: any[] = []; // Lista local de usuários

  constructor(private http: HttpClient) {
    // Inicializa a lista de usuários ao criar o serviço
    this.carregarUsuarios();
  }

  private carregarUsuarios(): void {
    this.http.get<any[]>(this.usuariosUrl).subscribe(
      usuarios => {
        this.usuarios = usuarios;
      },
      error => {
        console.error('Erro ao carregar o arquivo JSON de usuários:', error);
      }
    );
  }

  verificarCredenciais(email: string, senha: string): Observable<boolean> {
    const autenticado = this.usuarios.some(usuario => usuario.email === email && usuario.senha === senha);
    return of(autenticado);
  }

  cadastrarUsuario(email: string, senha: string): Observable<boolean> {
    const usuarioExistente = this.usuarios.some(usuario => usuario.email === email);
    if (usuarioExistente) {
      console.error('Usuário com este email já existe');
      return of(false);
    } else {
      // Adiciona o novo usuário à lista local
      this.usuarios.push({ email, senha });

      // Atualiza o arquivo JSON (simulado, você precisará de uma lógica assíncrona apropriada para salvar no backend)
      this.atualizarUsuariosNoJson();

      console.log('Usuário cadastrado com sucesso');
      return of(true);
    }
  }

  private atualizarUsuariosNoJson(): void {
    // Simula a atualização do arquivo JSON (esta é uma lógica simplificada)
    console.log('Atualizando o arquivo JSON de usuários:', this.usuarios);
    // Neste exemplo, o serviço não está realmente atualizando o arquivo JSON.
    // Em um ambiente de produção, você precisaria de uma lógica diferente para salvar os dados de forma segura.
  }

  estaAutenticado(): boolean {
    // Lógica de autenticação se necessário
    return true;
  }
}
