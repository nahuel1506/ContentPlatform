import { Component, inject, OnInit, signal } from '@angular/core';
import { ApiStatusService } from './core/services/api-status.service';

@Component({
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit {
  private readonly apiStatus = inject(ApiStatusService);
  readonly message = signal('Conectando con la API...');

  ngOnInit(): void {
    this.apiStatus.get().subscribe({
      next: response => this.message.set(
        response.status === 'ok' ? 'API conectada' : 'API no disponible'
      ),
      error: () => this.message.set('No se pudo conectar con la API')
    });
  }
}
