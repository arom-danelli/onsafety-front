import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../../services/person.service';
import { Person } from '../../../model/person.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-person-list',
  standalone: false,
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {
  persons: Person[] = [];

  constructor(private personService: PersonService, private router: Router, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.loadPersons();
  }

  loadPersons(): void {
    this.personService.getPersons().subscribe(
      data => this.persons = data,
      error => console.error('Erro ao carregar pessoas', error)
    );
  }

  deletePerson(id: number): void {
    this.personService.deletePerson(id).subscribe(
      () => {
        this.persons = this.persons.filter(p => p.id !== id);
        this.toastr.success('Pessoa excluída com sucesso!', 'Excluído');
      },
      error => {
        console.error('Erro ao excluir pessoa', error);
        this.toastr.error('Erro ao excluir pessoa', 'Erro');
      }
    );
  }

  editPerson(id: number): void {
    this.router.navigate([`/gestao-pessoas/form/${id}`]);
  }

  newRegistration(): void {
    this.router.navigate(['/gestao-pessoas/form']);
  }
}
