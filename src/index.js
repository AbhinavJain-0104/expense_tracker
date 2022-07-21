import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
  <SpeechProvider appId="95ce5f3d-b56b-4a36-89a2-e00e1850c100" language="en-US">
    <Provider>
      <App />
    </Provider>
//   </SpeechProvider>,
  document.getElementById('root')
);