import React, { useEffect } from 'react'
import '../css/Home.css'
import bookImg from '../imgs/book_img.png'
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import DocumentMeta from 'react-document-meta';

function Home() {

    useEffect(() => {
        document.title = "Coder's Library"
    },[])

    const meta = {
        title: "Coder's Library"
    }

    return (
        <DocumentMeta {...meta}>
            <div id='home_div'>
            <div>
                <table id='tbl_home'>
                    <tbody>
                        <tr>
                            <td>
                                <p id='wc_label'>Welcome to</p>
                                <p id='wc_label2'>Coder's Library</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <motion.img 
                                    animate={{
                                        rotate: 720,
                                        transition:{
                                            delay: 0.3,
                                            duration: 1
                                        }
                                    }}
                                id='img_handler' src={bookImg}></motion.img>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className='parags'>Here in Coder's Library, you can find a lot of books that you can use to start boosting your desired path or career in IT World. We serve you free books that are from prestigous authors and publishers out there.</p>
                                <p className='parags'>These books we have are not owned by us but rather a compilation of gathered books in order to help learners attain better quality of learning. </p>
                                <p className='parags'>Enjoy browsing! We hope that you'll find something useful.</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Link to='/books?book_id=0' id='holder_link'>
                                    <motion.button 
                                    whileHover={{
                                        scale: 1.1
                                    }}
                                    id='browse_btn'>BROWSE BOOKS</motion.button>
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </DocumentMeta>
    )
}

export default Home
