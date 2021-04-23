import { ConsultaComponent } from './consulta/consulta.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'register', component: CadastroComponent},
  {path: 'query', component: ConsultaComponent},
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'register',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
