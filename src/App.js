import './App.css';
import React from 'react';
import { useState, useEffect} from 'react';
import { BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import Home from './Components/jsx/Home';
import logo from './Components/imgs/book_img.png'

function App() {

  //const [state, setstate] = useState("Hello");

  return (
    <div className="App">
      <header id='header_all'>
        <ul id='ul_start'>
          <li id='li_main'><p id='head_label'>Coder's Library<img id='img_logo' src={logo}></img></p></li>
          <li id='li_main'>
            <ul id='ul_start2'>
              <li className='li_under'><p>Home</p></li>
              <li className='li_under'><p>Books</p></li>
              <li className='li_under'><p>About</p></li>
              <li className='li_under'><p>Buy us a Coffee</p></li>
            </ul>
          </li>
        </ul>
      </header>
      <Home />
      <footer id='footer_all'>
        <ul id='ul_start2'>
          <li>
            Hello
          </li>
        </ul>
        <hr id='hr_footer'></hr>
        <p id='copyright'>© Coder's Library 2021</p>
      </footer>
    </div>
  );
}

export default App;
