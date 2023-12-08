// auth-guard.service.ts

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
    if (this.authService.estaAutenticado()) {
      return true; // O usuário está autenticado, permita o acesso à rota protegida
    } else {
      // O usuário não está autenticado, redirecione para a página de login
      this.router.navigate(['/login']);
      return false;
    }
  }
}
