import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { renderImgs } from './js/render-functions';
import { fetchImg } from './js/pixabay-api';

export const setGallery = document.querySelector('ul.gallery');
export let imgset;
export let searchImgs;

export let addPage = 1;

// +++++++++++++++++++

const inputfield = document.querySelector('input');

const fillForm = document.querySelector('form');
const addImgs = document.querySelector('#addImg');

const preloader = document.querySelector('.preloader');
let maxPages;

const errorShow = () => {
  setGallery.innerHTML = '';
  iziToast.error({
    color: 'red',

    message: `❌ Sorry, there are no images matching your search query. Please try again!`,
    position: 'topRight',
  });
};

// loader begin==============

const showLoader = () => {
  preloader.style.display = 'flex';
};
const hideLoader = () => {
  preloader.style.display = 'none';
};
const handleLoad = () => {
  document.body.classList.add('loaded');
  document.body.classList.remove('loaded_hiding');
};
// window.onload = handleLoad;

// Begin ++++++++++++++++
fillForm.addEventListener('submit', async event => {
  event.preventDefault();
  addPage = 1;
  imgset = {};
  searchImgs = inputfield.value.trim();

  // control correct fill input

  if (!searchImgs.length) {
    iziToast.error({
      color: 'yellow',
      message: ` Please fill in the field for search images.`,
      position: 'topRight',
    });
    setGallery.innerHTML = '';
    return;
  }

  showLoader();

  try {
    imgset = await fetchImg();

    if (!imgset.length) {
      errorShow();
      addImgs.style.display = 'none';
      return;
    }
    maxPages = Math.ceil(imgset.length);

    if (maxPages > 1) {
      addImgs.style.display = 'flex';
    }
    renderImgs(imgset);
    getDomRect();
  } catch (error) {
    errorShow();
  } finally {
    hideLoader();
    handleLoad();
  }
});

// add pages===============
addImgs.addEventListener('click', async event => {
  event.preventDefault();

  if (addPage === maxPages) {
    addImgs.style.display = 'none';
    iziToast.error({
      color: 'blue',

      message: `We're sorry, but you've reached the end of search results.`,
      position: 'topRight',
    });
  }
  addPage += 1;
  showLoader();
  try {
    imgset = await fetchImg();

    if (!imgset.length) {
      errorShow();
      addImgs.style.display = 'none';
      return;
    }

    renderImgs(imgset);
    getDomRect();
  } catch (error) {
    errorShow();
  } finally {
    hideLoader();
    handleLoad();
  }
});
window.onload = handleLoad;

// =========================

async function getDomRect() {
  const imgSize = document.querySelector('.img-blok');
  const domRect = imgSize.getBoundingClientRect();
  window.scrollBy({
    top: domRect.height * 2,
    behavior: 'smooth',
  });
}
