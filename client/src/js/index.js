import { Workbox } from 'workbox-window';
import Editor from './editor';
import { getDb, putDb } from './database';
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

const editorInstance = new Editor();

if (typeof editorInstance === 'undefined') {
  loadSpinner();
} else {
  const loadEditorContent = async () => {
    const data = await getDb();
    console.log('Data from getDb:', data);
    const editorContent = data && data.length > 0 ? data[0].value : '';
    console.log('Setting editor content:', editorContent);
    editorInstance.setValue(typeof editorContent === 'string' ? editorContent : '');
  };
  loadEditorContent();
}

if ('serviceWorker' in navigator) {
  const workboxSW = new Workbox('/service-worker.js');
  workboxSW.register();
} else {
  console.error('Service workers are not supported in this browser.');
}
