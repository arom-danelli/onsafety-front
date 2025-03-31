import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PersonService } from '../../../services/person.service';
import { Person } from '../../../model/person.model';

@Component({
  selector: 'app-person-form',
  standalone: false,
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent implements OnInit {
  personForm!: FormGroup;
  isEditMode = false;
  personId!: number;

  constructor(
    private fb: FormBuilder,
    private personService: PersonService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.personForm = this.fb.group({
      name: ['', Validators.required],
      cpf: ['', Validators.required],
      birthDate: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.personId = +params['id'];
        this.loadPerson(this.personId);
      }
    });
  }

  loadPerson(id: number): void {
    this.personService.getPerson(id).subscribe(
      person => this.personForm.patchValue(person),
      error => this.toastr.error('Erro ao carregar pessoa', 'Erro')
    );
  }

  onSubmit(): void {
    if (this.personForm.invalid) {
      return;
    }

    const cpfSemMascara = this.personForm.value.cpf.replace(/\D/g, '');
    const person: Person = {
      ...this.personForm.value,
      cpf: cpfSemMascara
    };

    if (this.isEditMode) {
      person.id = this.personId;
      this.personService.updatePerson(person).subscribe(() => {
        this.toastr.success('Pessoa atualizada com sucesso!', 'Atualizado');
        this.router.navigate(['/gestao-pessoas/list']);
      }, () => {
        this.toastr.error('Erro ao atualizar pessoa', 'Erro');
      });
    } else {
      this.personService.createPerson(person).subscribe(() => {
        this.toastr.success('Pessoa criada com sucesso!', 'Criado');
        this.router.navigate(['/gestao-pessoas/list']);
      }, () => {
        this.toastr.error('Erro ao criar pessoa', 'Erro');
      });
    }
  }
}
