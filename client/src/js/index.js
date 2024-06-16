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

const stopSpinner = () => {
  const spinner = document.querySelector('.loading-container');
  if (spinner) {
    spinner.remove();
  }
};

const editor = new Editor();

if (typeof editor === 'undefined') {
  loadSpinner();
} else {
  // Initialize the editor content from the database
  const loadEditorContent = async () => {
    try {
      const data = await getDb();
      const editorContent = data && data.length > 0 ? data[0].value : '';

      // Set the editor content without overwriting the ASCII art
      const initialContent = `
/*
       _____  ____________
      / /   |/_  __/ ____/
 __  / / /| | / / / __/   
/ /_/ / ___ |/ / / /___   
 ____/_/  |_/_/ /_____/   
just another text editor
*/                          
`;

      // If there is existing content, append it to the initial content
      editor.setValue(typeof editorContent === 'string' && editorContent.trim() !== '' ? editorContent : initialContent);
    } catch (error) {
      console.error('Error loading editor content:', error);
    } finally {
      // Stop the spinner regardless of success or failure
      stopSpinner();
    }
  };

  loadEditorContent();
}

// Check if service workers are supported
if ('serviceWorker' in navigator) {
  // Register workbox service worker
  const workboxSW = new Workbox('/service-worker.js'); // Ensure the correct path
  workboxSW.register();
} else {
  console.error('Service workers are not supported in this browser.');
}
