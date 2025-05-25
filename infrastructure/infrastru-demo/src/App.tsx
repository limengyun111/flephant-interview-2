import './App.css';
import React from 'react';
import InterfaceError from './error_show/InterfaceError';
import UIError from './error_show/UIError';
import ErrorBoundry from './error_handle/ErrorBoundry';

function App() {
  return (
    <div className="App">
      <InterfaceError />
      <ErrorBoundry>
        <UIError />
      </ErrorBoundry>
    </div>
  );
}

export default App;
