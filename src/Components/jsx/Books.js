import React from 'react'
import '../css/Books.css'
import Book from '../imgs/book.png';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {useState, useEffect} from 'react';
import datamain from '../../Data/data_values';

function Books() {

    const [sidep, setsidep] = useState(false);
    const [setter, setsetter] = useState(true);
    const [id, setid] = useState(0);

    const parameter = () => {
        let url = new URLSearchParams(window.location.search);
        return url.get("book_id");
    }

    useEffect(() => {
        //alert(parameter());
        setid(parameter());
    })

    const unset = (nm) => {
        //alert(nm);
        setsetter(!setter);
        if(setter == true)
        {
            document.getElementById(nm).style.display = "none";
        }
        else
        {
            document.getElementById(nm).style.display = "unset";
        }
    }

    return (
        <div id='div_books'>
            <div id='preview'>
                <motion.div 
                    animate={{
                        width: window.innerWidth < 768 ? sidep == false ? "50px" : "100%" : sidep == false ? "50px" : "20%",
                        height: window.innerWidth < 768 ? sidep == false ? "50px" : "100%" : sidep == false ? "100%" : "100%",
                        overflowY: sidep == false ? "hidden" : "scroll",
                        overflowX: sidep == false ? "hidden" : "hidden",
                        transition:{
                            delay: sidep == false ? 0.5 : 0
                        }
                    }}
                id='sidepanel'>
                    <motion.button 
                        animate={{
                            rotate: sidep == false? 0 : 180,
                            borderRadius: sidep == false? "0px" : "50px"
                        }}
                    id='btn_panel' onClick={() => {setsidep(!sidep);}}>&gt;</motion.button>

                    <motion.table id='tbl_cat'
                        animate={{
                            opacity: sidep == false ? 0 : 1,
                            transition:{
                                delay: sidep == false ? 0 : 0.5
                            }
                        }}
                    >
                        <tbody>
                            <tr>
                                <td>
                                    <p id='label_cat'>Categories</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {datamain.categories.map((val) => {
                                        //console.log(val);
                                        return <p>{<p><span className='val_handler' onClick={() => {unset(val)}}>{val}</span>
                                        <table className='tbls_result' id={val}>{
                                            datamain.books.map((val2) => {
                                                if(val == val2.category)
                                                {
                                                    //console.log(val2.name);
                                                    return <Link to={`/books?book_id=${val2.id}`} className='links_books'><p className='val2_holder'>{val2.name}</p></Link>
                                                }
                                            })}</table></p>
                                        }</p>
                                    })}
                                </td>
                            </tr>
                        </tbody>
                    </motion.table>
                </motion.div>

                {id == 0 || null ? (
                    <table className='tbl_prev'>
                    <tbody>
                        <tr>
                            <td>
                                <motion.p 
                                    animate={{
                                        fontSize: window.innerWidth < 768 ? "20px" : "30px"
                                    }}
                                id='prev_label'>Select a Book!</motion.p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <motion.img 
                                    animate={{
                                        width: window.innerWidth < 768 ? "200px" : "300px",
                                        height: window.innerWidth < 768 ? "160px" : "230px"
                                    }}
                                src={Book} id='book_logo'></motion.img>
                                <motion.p
                                    animate={{
                                        fontSize: window.innerWidth < 768 ? "15px" : "20px"
                                    }}
                                 id='note'>Use the sidepanel to navigate categories</motion.p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                ):(
                    <table className='tbl_prev'>
                        <tbody>
                            <tr>
                                <td>
                                    {datamain.books.map((stat) => {
                                        if(stat.id == id)
                                        {
                                            return <table id='result_tbl_val'>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <p id='result_tbl_val_lbl'>{stat.name}</p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <img id='result_tbl_val_img'></img>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <button className='result_tbl_val_btns' id='dl_res'>Download</button>
                                                            <button className='result_tbl_val_btns' id='don_res'>Buy us a Coffee</button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        }
                                    })}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                )}
                
            </div>
        </div>
    )
}

export default Books
