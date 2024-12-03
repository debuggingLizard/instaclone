import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class GallerydataService {
    constructor() {}

    feed = [
        {
          userName: 'Hans',
          img: 'banana.jpg',
          likes: 96,
          liked: true,
        },
        {
          userName: 'Franz',
          img: 'currant.jpg',
          likes: 96,
          liked: false,
        },
        {
          userName: 'Papa',
          img: 'orange.jpg',
          likes: 96,
          liked: false,
        }
      ];
}