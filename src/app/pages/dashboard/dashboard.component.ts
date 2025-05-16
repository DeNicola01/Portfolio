import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <--- IMPORTANTE!
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  nome: string = '';
  nomeEnviado: string | null = null;

  enviar() {
    this.nomeEnviado = this.nome.trim() || null;
  }
}
