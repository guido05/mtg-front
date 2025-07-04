import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  images = [
    { url: '/assets/img1.jpg', title: 'Primera imagen' },
    { url: '/assets/img2.jpg', title: 'Segunda imagen' },
    { url: '/assets/img3.jpg', title: 'Tercera imagen' },
    { url: '/assets/img4.jpg', title: 'Cuarta imagen' },
    { url: '/assets/img5.jpg', title: 'Quinta imagen' },
  ];

  onSelect(img: any) {
    console.log('Seleccionaste:', img);
    // Abrir modal, navegar, zoom más grande, etc.
  }

}
