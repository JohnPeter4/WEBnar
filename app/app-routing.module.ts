import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeTemplateComponent } from './home-template/home-template.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FeedComponent } from './feed/feed.component';
import { CurriculoComponent } from './curriculo/curriculo.component';
import { AuthGuard } from './auth-guard.service';
import { CurriculoAmandaComponent } from './curriculo-amanda/curriculo-amanda.component';
import { CurriculoJoaoComponent } from './curriculo-joao/curriculo-joao.component';
import { CurriculoDiegoComponent } from './curriculo-diego/curriculo-diego.component';
import { CurriculoEduardoComponent } from './curriculo-eduardo/curriculo-eduardo.component';


const routes: Routes = [
  {
    path:'login',
    component:LoginComponent 
  },
  {
    path:'cadastro',
    component:CadastroComponent
  },
  {
    path:'home',
    component:HomeTemplateComponent,
    canActivate:[AuthGuard],
    children: [
      {path:'Amanda',component:CurriculoAmandaComponent},
      {path:'feed',component:FeedComponent},
      {path:'Joao',component:CurriculoJoaoComponent},
      {path:'Diego',component:CurriculoDiegoComponent},
      {path:'Eduardo',component:CurriculoEduardoComponent},
    ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // ROTA INCIAL
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
