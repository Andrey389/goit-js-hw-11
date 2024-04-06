import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

import { getImages } from './js/pixabay-api';

import { getGallery } from './js/render-functions';

const refs = {
  formEl: document.querySelector('.form-search'),
  inputEl: document.querySelector('.input-tex'),
};

refs.formEl.addEventListener('submit', event => {
  event.preventDefault();
  const query = event.target.elements.inptext.value;

  if (query === '') {
    iziToast.error({
      title: 'Error',
      message:
        '❌ Sorry, there are no images matching your search query. Please try again!',
    });
  }
  getImages(query).then(data => {
    const markup = getGallery(data);
    refs.inputEl.insertAdjacentElement('beforeend', markup);
  });
});
