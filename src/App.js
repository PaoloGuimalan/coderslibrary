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
            <table id='tbl_under_f'>
              <tbody>
                <tr>
                  <td>
                    <p className='head_foot'>The Team</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className='footer_p'>About</p>
                    <p className='footer_p'>Contact</p>
                    <p className='footer_p'>Developers</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </li>
          <li>
            <table id='tbl_medias'>
              <tbody>
                <tr>
                  <td>
                    <p className='head_foot'>Social Media</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a target='_blank' href="https://www.facebook.com/paulo.portesguimalan/" class="fa fa-facebook"></a>
                    <a target='_blank' href="https://github.com/PaoloGuimalan" class="fa fa-github"></a>
                    <a target='_blank' href="https://www.linkedin.com/in/john-paulo-ramil-guimalan-89029321a/" class="fa fa-linkedin"></a>
                    <a target='_blank' href="mailto: pauloportes.guimalan187@gmail.com" class="fa fa-google"></a>
                  </td>
                </tr>
              </tbody>
            </table>
          </li>
        </ul>
        <hr id='hr_footer'></hr>
        <p id='copyright'>© Coder's Library 2021</p>
      </footer>
    </div>
  );
}

export default App;
