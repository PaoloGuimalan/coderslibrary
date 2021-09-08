import './App.css';
import React from 'react';
import { useState, useEffect} from 'react';
import { BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import Home from './Components/jsx/Home';
import Books from './Components/jsx/Books';
import logo from './Components/imgs/book_img.png'
import {AnimatePresence, motion} from 'framer-motion';

function App() {

  //const [state, setstate] = useState("Hello");

  return (
    <div className="App">
      <header id='header_all'>
        <ul id='ul_start'>
          <li id='li_main'><p id='head_label'>Coder's Library<img id='img_logo' src={logo}></img></p></li>
          <li id='li_main'>
            <ul id='ul_start2'>
              <li className='li_under'><Link to='/' className='links'><p>Home</p></Link></li>
              <li className='li_under'><Link to='/books' className='links'><p>Books</p></Link></li>
              <li className='li_under'><Link to='/about' className='links'><p>About</p></Link></li>
              <li className='li_under'><Link to='/donate' className='links'><p>Buy us a Coffee</p></Link></li>
            </ul>
          </li>
        </ul>
      </header>

      <AnimatePresence>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/books' component={Books} />
        </Switch>
      </AnimatePresence>
      
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
