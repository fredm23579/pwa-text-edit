import { Workbox } from 'workbox-window';
import Editor from './editor';
import { getDb, putDb } from './database'; // Ensure this line is correct
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

const removeSpinner = () => {
  const spinner = main.querySelector('.spinner');
  if (spinner) {
    spinner.remove();
  }
};

const initializeEditor = async () => {
  try {
    const editor = new Editor();

    if (typeof editor === 'undefined') {
      loadSpinner();
    } else {
      // Initialize the editor content from the database
      const data = await getDb();
      console.log('Data from getDb:', data);
      const editorContent = data && data.length > 0 ? data[0].value : '';

      console.log('Setting editor content:', editorContent);
      editor.setValue(typeof editorContent === 'string' ? editorContent : '');

      editor.on('blur', () => {
        console.log('The editor has lost focus');
        putDb(editor.getValue());
      });

      removeSpinner();
    }
  } catch (error) {
    console.error('Error initializing editor:', error);
    loadSpinner();
  }
};

initializeEditor();

// Check if service workers are supported
if ('serviceWorker' in navigator) {
  // Register workbox service worker
  const workboxSW = new Workbox('/service-worker.js'); // Ensure the correct path
  workboxSW.register();
} else {
  console.error('Service workers are not supported in this browser.');
}
