import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

import { getImages } from './js/pixabay-api';

import { getGallery } from './js/render-functions';

const refs = {
  formEl: document.querySelector('.form-search'),
  inputEl: document.querySelector('.input-text'),
};

refs.formEl.addEventListener('submit', event => {
  event.preventDefault();
  const query = event.target.elements.input.value;

  if (query === '') {
    iziToast.error({
      title: 'Error',
      message:
        '❌ Sorry, there are no images matching your search query. Please try again!',
    });
  }
  getImages(query).then(data => {
    const markup = getGallery(data.hits);
    console.log(markup);
  });
});
