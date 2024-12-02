import { Component, inject } from '@angular/core';
import { GallerydataService } from '../gallerydata.service';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {
  feedData = inject(GallerydataService);
}
