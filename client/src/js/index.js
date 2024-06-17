import { Workbox } from 'workbox-window';
import Editor from './editor';
import './database';
import '../css/style.css';

const main = document.querySelector('#main');
main.innerHTML = '';

const loadSpinner = () => {
  const spinner = document.createElement('div');
  spinner.classList.add('spinner');
  spinner.innerHTML = `
  <div class="loading-container">
  <div class="loading-spinner"></div>
  </div>
  `;
  main.appendChild(spinner);
};

loadSpinner();

const editor = new Editor();

if (typeof editor === 'undefined') {
  loadSpinner();
} else {
  const loadEditorContent = async () => {
    const data = await getDb();
    const editorContent = data && data.length > 0 ? data[0].value : '';
    editor.setValue(typeof editorContent === 'string' ? editorContent : '');
  };

  loadEditorContent();
}

if ('serviceWorker' in navigator) {
  const workboxSW = new Workbox('/service-worker.js');
  workboxSW.register();
} else {
  console.error('Service workers are not supported in this browser.');
}
