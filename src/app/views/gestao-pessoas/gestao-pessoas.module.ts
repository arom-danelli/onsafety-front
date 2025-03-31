import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GridModule, FormModule, ButtonModule, CardModule, CollapseModule, NavModule, TableModule } from '@coreui/angular';

import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';

import { GestaoPessoasComponent } from './gestao-pessoas/gestao-pessoas.component';
import { routes } from './routes';

import { GestaoPessoasRoutingModule } from './gestao-pessoas-routing.module';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonFormComponent } from './person-form/person-form.component';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    GestaoPessoasComponent,
    PersonListComponent,
    PersonFormComponent
  ],
  imports: [
    CommonModule,
    GestaoPessoasRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    GridModule,
    FormModule,
    ButtonModule,
    CardModule,
    CollapseModule,
    NavModule,
    TableModule,
    NgxMaskDirective, 
    NgxMaskPipe,
    ToastrModule.forRoot(),
    RouterModule.forChild(routes)
  ]
})
export class GestaoPessoasModule { }
