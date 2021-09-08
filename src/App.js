import './App.css';
import React from 'react';
import { useState, useEffect} from 'react';
import { BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';

function App() {

  const [state, setstate] = useState("Hello");

  return (
    <div className="App">{state}
    </div>
  );
}

export default App;
