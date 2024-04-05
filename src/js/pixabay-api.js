import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  formEl: document.querySelector('.form-search'),
  inputEl: document.querySelector('.input-tex'),
};

export function getImages(query) {
  const BASE_URL = 'https://pixabay.com/api/';
  const params = new URLSearchParams({
    key: '43244961-2cc0a4f4473f9c50538fea30b',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const url = `${BASE_URL}?${params}`;

  return fetch(url).then(res => res.json());
}

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
  getImages(query);
});
