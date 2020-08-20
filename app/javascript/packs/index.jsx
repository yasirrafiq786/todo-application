import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';

document.addEventListener ('turbolinks:load', () => {
  ReactDOM.render (<App />, document.getElementById ('root'));
});
