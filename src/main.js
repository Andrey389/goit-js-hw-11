import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

import { getImages } from './js/pixabay-api';

import { getGallery } from './js/render-functions';

const gallery = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');

const refs = {
  formEl: document.querySelector('.form-search'),
  inputEl: document.querySelector('.input-text'),
};

refs.formEl.addEventListener('submit', event => {
  event.preventDefault();
  const query = event.target.elements.input.value.trim();

  if (!query) {
    iziToast.error({
      title: 'Error',
      message: '❌ Please enter a search query!',
      position: 'topRight',
    });
    return;
  }

  getImages(query)
    .then(data => {
      gallery.innerHTML = '';
      if (data.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            '❌ Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      } else {
        deleteLoad();
        const markup = getGallery(data.hits);
      }
    })
    .catch(error => {
      createLoad();
      iziToast.error({
        title: 'Error',
        message:
          '❌ Sorry, an error occurred while fetching images. Please try again later!',
        position: 'topRight',
      });
      console.error('Error fetching images:', error);
    });
});

function createLoad() {
  loaderEl.classList.remove('visually-hidden');
}
function deleteLoad() {
  loaderEl.classList.add('visually-hidden');
}
console.log(deleteLoad);
