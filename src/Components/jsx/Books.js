import React from 'react'
import '../css/Books.css'
import Book from '../imgs/book.png';
import Loader_anm from './Loader';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {useState, useEffect} from 'react';
import Axios from 'axios';

function Books() {

    const [sidep, setsidep] = useState(false);
    const [setter, setsetter] = useState(true);
    const [id, setid] = useState(0);

    const [datamain, setdatamain] = useState({categories:[],books:[]});

    const [loader, setloader] = useState(true);

    const parameter = () => {
        let url = new URLSearchParams(window.location.search);
        return url.get("book_id");
    }

    const getter = () => {
        Axios.get("https://data-books.herokuapp.com/fetch").then((response) => {
            if(response)
            {
                var dat_res = response.data;
                setdatamain(dat_res);
                setloader(false);
                console.log(dat_res.books);
            }
        }).catch((err) => {
            //console.log("Error!");
            setloader(true);
        });
    }

    useEffect(() => {
        //alert(parameter());
        setid(parameter());
        getter();
    });

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
                        height: window.innerWidth < 768 ? sidep == false ? "50px" : "120vh" : sidep == false ? "120vh" : "120vh",
                        overflowY: sidep == false ? "hidden" : "scroll",
                        overflowX: sidep == false ? "hidden" : "hidden",
                        boxShadow: sidep == false ? "0px 0px 0px black" : "0px 0px 10px black",
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
                                    {loader == true ? (
                                        <Loader_anm />
                                    ):(
                                        <div id='unloaded_div'>
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
                                        </div>
                                    )}
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
                                                            <img id='result_tbl_val_img' style={{overflow: "hidden"}} src={stat.link_img}></img>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <p className='p_res'><b>Publisher:</b></p>
                                                            <p className='p_res'>{stat.publisher}</p>
                                                            <p className='p_res'><b>Author:</b></p>
                                                            <p className='p_res'>{stat.author}</p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <button className='result_tbl_val_btns' id='dl_res'><a id='dl_res_a' href={stat.link_dl} target='_blank'>Download</a></button>
                                                            <Link to='/donate'><button className='result_tbl_val_btns' id='don_res'>Buy us a Coffee</button></Link>
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
