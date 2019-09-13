import React from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/css/dragable.css'

import Dragable from './components/Dragable'
import Reversed from './components/Reversed';
import Pie_Dragable from './components/Pie_Dragable';


function App() {
  return (
    <div className="App">
      <div>
      <Dragable />
      </div>
      
      <div>
      <Reversed/>
      </div>

      <div>
        <Pie_Dragable/>
      </div>
      
    </div>
  );
}

export default App;
