import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Content } from '../models/content';

@Injectable({ providedIn: 'root' })
export class ContentService {
  private readonly http = inject(HttpClient);

  getAll() {
    return this.http.get<Content[]>('/api/contents');
  }
}
