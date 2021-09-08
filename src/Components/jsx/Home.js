import React from 'react'
import '../css/Home.css'
import bookImg from '../imgs/book_img.png'

function Home() {
    return (
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
                                <img id='img_handler' src={bookImg}></img>
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
                                <button id='browse_btn'>BROWSE BOOKS</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home