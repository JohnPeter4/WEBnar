import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurriculoService {
  private usuariosUrl = 'assets/CurriculoMilano.json';
  public usuarios: any[] = []; // Lista local de usuários

  constructor(private http: HttpClient) {
    // Inicializa a lista de usuários ao criar o serviço
    this.carregarUsuarios();
  }

  private carregarUsuarios(): void {
    this.http.get<any[]>(this.usuariosUrl).subscribe(
      usuarios => {
        this.usuarios = usuarios;
        console.log(this.usuarios);
      },
      error => {
        console.error('Erro ao carregar o arquivo JSON de usuários:', error);
      }
    );
  }

  // Método para trocar o caminho do JSON
  trocarCaminhoJson(novoCaminho: string): void {
    this.usuariosUrl = novoCaminho;
    this.carregarUsuarios();
  }
}
