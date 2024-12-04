import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-post',
  standalone: true,
  imports: [],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.scss',
})
export class SinglePostComponent {
  @Input() posting!:{userName: string, img: string, likes: number, liked: boolean,};

  likePosting(bool: boolean) {
    this.posting.liked = bool;
    if (bool === true) {
      this.posting.likes++;
    } else {
      this.posting.likes--;
    }
  }
}
