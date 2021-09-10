import React from 'react'
import '../css/Books.css'
import Book from '../imgs/book.png';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {useState} from 'react';

function Books() {

    const [sidep, setsidep] = useState(false);

    return (
        <div id='div_books'>
            <div id='preview'>
                <motion.div 
                    animate={{
                        width: window.innerWidth < 768 ? sidep == false ? "50px" : "100%" : sidep == false ? "50px" : "20%"
                    }}
                id='sidepanel'>
                    <motion.button 
                        animate={{
                            rotate: sidep == false? 0 : 180,
                            borderRadius: sidep == false? "0px" : "50px"
                        }}
                    id='btn_panel' onClick={() => {setsidep(!sidep);}}>&gt;</motion.button>
                </motion.div>
                <table className='tbl_prev'>
                    <tbody>
                        <tr>
                            <td>
                                <p id='prev_label'>Select a Book!</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src={Book} id='book_logo'></img>
                                <p id='note'>Use the sidepanel to navigate categories</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Books
