// Import methods to save and get data from the indexedDB database in './database.js'
import { getDb, putDb } from './database';
import { header } from './header';

export default class {
  constructor() {
    const localData = localStorage.getItem('content');

    // Check if CodeMirror is loaded
    if (typeof CodeMirror === 'undefined') {
      throw new Error('CodeMirror is not loaded');
    }

    this.editor = CodeMirror(document.querySelector('#main'), {
      value: '',
      mode: 'javascript',
      theme: 'monokai',
      lineNumbers: true,
      lineWrapping: true,
      autofocus: true,
      indentUnit: 2,
      tabSize: 2,
    });

    // When the editor is ready, set the value to whatever is stored in IndexedDB.
    // Fall back to localStorage if nothing is stored in IndexedDB, and if neither is available, set the value to header.
    getDb().then((data) => {
      console.info('Loaded data from IndexedDB, injecting into editor');
      console.log('Data from IndexedDB:', data);

      let editorContent = header;
      if (data && data.length > 0 && data[0].value) {
        editorContent = data[0].value;
      } else if (localData) {
        editorContent = localData;
      }
      
      // Ensure the editorContent is a string before setting it
      console.log('Setting editor content:', editorContent);
      this.editor.setValue(typeof editorContent === 'string' ? editorContent : header);
    }).catch((error) => {
      console.error('Error loading data from IndexedDB:', error);
      this.editor.setValue(header);
    });

    this.editor.on('change', () => {
      localStorage.setItem('content', this.editor.getValue());
    });

    // Save the content of the editor when the editor itself loses focus
    this.editor.on('blur', () => {
      console.log('The editor has lost focus');
      putDb(localStorage.getItem('content')).catch((error) => {
        console.error('Error saving data to IndexedDB:', error);
      });
    });
  }
}
