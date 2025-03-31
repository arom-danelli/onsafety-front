import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-gestao-pessoas',
  standalone: false,
  templateUrl: './gestao-pessoas.component.html',
  styleUrl: './gestao-pessoas.component.scss'
})
export class GestaoPessoasComponent {
  constructor(private router: Router, private toastr: ToastrService) {}

  navigateToForm(): void {
    this.router.navigate(['/gestao-pessoas/form']);
  }

  navigateToList(): void {
    this.router.navigate(['/gestao-pessoas/list']);
  }

  showToast(): void {
    this.toastr.success('Mensagem de sucesso!', 'Título');
  }

}
