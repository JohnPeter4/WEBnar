import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurriculoComponent } from './curriculo/curriculo.component';
import { AbaPrincipalComponent } from './aba-principal/aba-principal.component';
import { AbaLateralComponent } from './aba-lateral/aba-lateral.component';
import { AvisosComponent } from './avisos/avisos.component';
import { FeedComponent } from './feed/feed.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeTemplateComponent } from './home-template/home-template.component';
import { HttpClientModule } from '@angular/common/http';
import { TesteBancoComponent } from './teste-banco/teste-banco.component';
import { CurriculoAmandaComponent } from './curriculo-amanda/curriculo-amanda.component';
import { CurriculoDiegoComponent } from './curriculo-diego/curriculo-diego.component';
import { CurriculoEduardoComponent } from './curriculo-eduardo/curriculo-eduardo.component';
import { CurriculoJoaoComponent } from './curriculo-joao/curriculo-joao.component';

@NgModule({
  declarations: [
    AppComponent,
    CurriculoComponent,
    AbaPrincipalComponent,
    AbaLateralComponent,
    AvisosComponent,
    FeedComponent,
    LoginComponent,
    CadastroComponent,
    HomeTemplateComponent,
    TesteBancoComponent,
    CurriculoAmandaComponent,
    CurriculoDiegoComponent,
    CurriculoEduardoComponent,
    CurriculoJoaoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
