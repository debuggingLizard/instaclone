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

  likePosting(index:number, bool:boolean) {
    this.feedData.feed[index].liked = bool;
    if (bool === true) {
      this.feedData.feed[index].likes++;
    } else {
      this.feedData.feed[index].likes--;
    }
  }
}
