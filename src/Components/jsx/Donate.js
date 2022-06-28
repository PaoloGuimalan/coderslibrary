import React, { useEffect } from 'react'
import gcash from '../imgs/gcash.png';
import paymaya from '../imgs/paymaya.png';
import '../css/Donate.css'
import DocumentMeta from 'react-document-meta';

function Donate() {

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
        <div id='donate_div'>
            <div>
                <p id='label_donate'>You can donate at the following.</p>
            </div>
            <div id='div_imgs'>
                <img className='img_donate' src={gcash}></img>
                <center><p><b>Account Number:</b> 09275508232</p></center>
            </div>
            <div id='div_imgs'>
                <img className='img_donate' src={paymaya}></img>
                <center><p><b>Account Number:</b> 09275508232</p></center>
            </div>
            <div>
                <p id='label_donate_foot'>Thank You for your support! :&gt;</p>
            </div>
        </div>
        </DocumentMeta>
    )
}

export default Donate
