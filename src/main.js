import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

import { getImages } from './js/pixabay-api';

import { getGallery } from './js/render-functions';

const gallery = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');
loaderEl.addEventListener.add('.visually-hidden');
loaderEl.classList.remove('.visually-hidden');
const refs = {
  formEl: document.querySelector('.form-search'),
  inputEl: document.querySelector('.input-text'),
};

refs.formEl.addEventListener('submit', event => {
  event.preventDefault();
  const query = event.target.elements.input.value;

  getImages(query)
    .then(data => {
      gallery.innerHTML = '';
      const markup = getGallery(data.hits);
      if (data.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            '❌ Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      } else {
        const markup = getGallery(data.hits);
      }
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message:
          '❌ Sorry, an error occurred while fetching images. Please try again later!',
        position: 'topRight',
      });
      console.error('Error fetching images:', error);
    });
});
