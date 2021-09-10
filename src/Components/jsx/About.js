import React from 'react'
import '../css/About.css'
import Dev1 from '../imgs/pr_me.jpg';
import {motion} from 'framer-motion';

function About() {
    return (
        <div id='about_div'>
            <div>
                <p id='label_about'>About Coder's Library</p>
            </div>
            <div id='div_sec_ab'>
                <p className='ab_parags'>Coder's Library were created mainly for sharing our team's gathered books. During the pandemic we as learners also struggle to find enough resources for us to learn more about Programming, Coding and other IT based books and topics. Our team began collecting free pdf books so that we can easily share them as a whole.</p>
                <p className='ab_parags'>Our project started in September 2021 and hopefully will become progressive. Coder's Library is here to help learners to attain resources/books that are needed for them to attain their best 
                capacity in learning, specifically in Coding and Programming. Supporting our project will help us improve our services more and probably expand our platform to 
                attain wider range of topics and resources.</p>
                <table id='dev_tbl'>
                    <tbody>
                        <tr>
                            <td>
                                <p id='lbl_dev'>Developer</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <ul id='ul_dev'>
                                    <li>
                                        <img id='dev_img' src={Dev1}></img>
                                    </li>
                                    <li>
                                        <p id='dev_name'><b>John Paulo Ramil Guimalan</b></p>
                                        <motion.a 
                                            animate={{
                                                fontSize: window.innerWidth < 768 ? "15px" : "18px"
                                            }}
                                        id='dev_name' href='mailto: pauloportes.guimalan187@gmail.com'>pauloportes.guimalan187@gmail.com</motion.a><br></br>
                                        <motion.button 
                                            whileHover={{
                                                scale: 1.1
                                            }}
                                        id='dev_btn'><a id='links' href='https://hardcore-saha-a3f79b.netlify.app/' target='_blank'>Visit My Website</a></motion.button>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default About
