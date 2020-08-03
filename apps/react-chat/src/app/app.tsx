import React from 'react';

import './app.scss';

export const App = () => {
  const applicationName: string = 'React';
  
  return (
    <div className="app">
      <application-header title={applicationName}></application-header>
    </div>
  );
};

export default App;
