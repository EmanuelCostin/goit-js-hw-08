// Importăm SimpleLightbox și stilurile sale
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Importăm galeria de imagini
import { galleryItems } from './gallery-items';

// Inițializăm galeria cu SimpleLightbox
const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});

// Adăugăm elementele galeriei în HTML
const galleryContainer = document.querySelector('.gallery');
galleryItems.forEach(item => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = item.original;
  const img = document.createElement('img');
  img.src = item.preview;
  img.alt = item.description;
  a.appendChild(img);
  li.appendChild(a);
  galleryContainer.appendChild(li);
});
