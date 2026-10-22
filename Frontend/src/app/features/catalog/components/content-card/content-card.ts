import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Content } from '../../models/content';
import { getContentCover, onContentImageError } from '../../utils/content-artwork';

@Component({
  selector: 'app-content-card',
  imports: [RouterLink],
  templateUrl: './content-card.html',
  styleUrl: './content-card.css',
})
export class ContentCard {
  @Input({ required: true }) content!: Content;
  readonly coverImage = getContentCover;
  readonly handleImageError = onContentImageError;
}
