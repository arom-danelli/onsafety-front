import { Routes } from '@angular/router';
import { GestaoPessoasComponent } from './gestao-pessoas/gestao-pessoas.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonFormComponent } from './person-form/person-form.component';

export const routes: Routes = [
  {
    path: '',
    component: GestaoPessoasComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: PersonListComponent, data: { title: 'Lista de Pessoas' } },
      { path: 'form', component: PersonFormComponent, data: { title: 'Cadastro de Pessoa' } },
      { path: 'form/:id', component: PersonFormComponent, data: { title: 'Edição de Pessoa' } }
    ]
  }
];
