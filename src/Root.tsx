import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {App} from './App';

function Root() {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

export function renderReactRoot() {
  const $root = document.querySelector('#root');

  if ($root) {
    ReactDOM.render(<Root />, $root);
  }
}
