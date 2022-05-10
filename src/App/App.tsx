import React from 'react';

import './App.css';
import Header from '../components/Header/Header';
import MainContent from '../components/MainContent/HomePage';
import { ReturnComponentType } from '../types/ReturnComponentType';

const App = (): ReturnComponentType => (
  <React.Suspense fallback={<span>df</span>}>
    <div className="App">
      <Header />
      <MainContent />
    </div>
  </React.Suspense>
);

export default App;
