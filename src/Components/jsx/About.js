import React, { useEffect } from 'react'
import '../css/About.css'
import Dev1 from '../imgs/pr_me.jpg';
import {motion} from 'framer-motion';
import DocumentMeta from 'react-document-meta';
import { Link } from 'react-router-dom'

function About() {

    useEffect(() => {
        document.title = "Coder's Library"
    },[])

    const meta = {
        title: "Coder's Library",
        meta: {
            property: "og:title",
            content: "Coder's Library"
        }
    }

    return (
        <DocumentMeta {...meta}>
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
                                <p id='lbl_dev'>Platforms</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className='ab_parags'>
                                    Coder's Library also provide extended accessibility by using Apps for your devices. We, aim to widen our platform 
                                    to provide more efficient learning for user's. Below are the available Platforms at the present, where you can choose 
                                    and install it on your devices.
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <ul id='ul_platforms'>
                                    <li>
                                        <Link to='/android' className='links'>
                                            <div id='div_android'>
                                                <span id='android_icon' class="material-symbols-outlined">android</span>
                                                <p>Android</p>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
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
                                        <motion.img 
                                            animate={{
                                                marginRight: window.innerWidth  < 768 ? "0px" : "50px"
                                            }}
                                        id='dev_img' src={Dev1}></motion.img>
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
                                        id='dev_btn'><a id='links' href='https://paologuimalan.netlify.app/' target='_blank'>Visit My Website</a></motion.button>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table id='cont_tbl'>
                    <tbody>
                        <tr>
                            <td>
                                <p id='lbl_cont'>Contacts</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <ul id='ul_cont'>
                                    <li>
                                        <a target='_blank' href="https://www.facebook.com/paulo.portesguimalan/" class="fa fa-facebook" id='fafa'></a>
                                    </li>
                                    <li>
                                        <a target='_blank' href="https://github.com/PaoloGuimalan" class="fa fa-github" id='fafa'></a>
                                    </li>
                                    <li>
                                         <a target='_blank' href="https://www.linkedin.com/in/john-paulo-ramil-guimalan-89029321a/" class="fa fa-linkedin" id='fafa'></a>
                                    </li>
                                    <li>
                                         <a target='_blank' href="mailto: pauloportes.guimalan187@gmail.com" class="fa fa-google" id='fafa'></a>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td><center><p><b>Contact Number:</b> +63 0927 550 8232</p></center></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </DocumentMeta>
    )
}

export default About
