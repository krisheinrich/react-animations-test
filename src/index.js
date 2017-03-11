import React from 'react';
import ReactDOM from 'react-dom';

const title = "React Animations";

ReactDOM.render(
  <div><h1>{title}</h1></div>,
  document.getElementById('react-root')
);

module.hot.accept();
