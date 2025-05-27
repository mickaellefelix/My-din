import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { QuemSomosComponent } from './pages/quem-somos/quem-somos.component';
import { RecursosComponent } from './pages/recursos/recursos.component';
import { FeedbacksComponent } from './pages/feedbacks/feedbacks.component';
import { ContatosComponent } from './pages/contatos/contatos.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ConfiguracoesComponent } from './pages/configuracoes/configuracoes.component';
import { CadastroGanhoComponent } from './pages/cadastro-ganho/cadastro-ganho.component';
import { CadastroGastoComponent } from './pages/cadastro-gasto/cadastro-gasto.component';

export const routes: Routes = [
    {path:'', redirectTo: '/home', pathMatch: 'full'},
    {path:'home', component:HomeComponent},
    {path:'quem-somos', component:QuemSomosComponent},
    {path:'recursos', component:RecursosComponent},
    {path:'feedbacks', component:FeedbacksComponent},
    {path:'contatos', component:ContatosComponent},
    {path:'login', component:LoginComponent},
    {path:'signup', component:SignupComponent},
    {path:'configuracoes', component:ConfiguracoesComponent},
    {path:'cadastro-ganho', component:CadastroGanhoComponent},
    {path:'cadastro-gasto', component:CadastroGastoComponent}
];
