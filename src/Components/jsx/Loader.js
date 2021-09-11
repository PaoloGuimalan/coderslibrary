import React from 'react'
import '../css/Loader.css'
import {motion} from 'framer-motion';

function Loader() {

    const variant_anm = {
        1:{
            width: "80%",
            transition:{
                yoyo: Infinity,
                duration: 1,
                delay: 0.1
            }
        },
        2:{
            width: "80%",
            transition:{
                yoyo: Infinity,
                duration: 1,
                delay: 0.2
            }
        },
        3:{
            width: "80%",
            transition:{
                yoyo: Infinity,
                duration: 1,
                delay: 0.3
            }
        },
        4:{
            width: "80%",
            transition:{
                yoyo: Infinity,
                duration: 1,
                delay: 0.4
            }
        },
        5:{
            width: "80%",
            transition:{
                yoyo: Infinity,
                duration: 1,
                delay: 0.5
            }
        },
        6:{
            width: "80%",
            transition:{
                yoyo: Infinity,
                duration: 1,
                delay: 0.6
            }
        },
        7:{
            width: "80%",
            transition:{
                yoyo: Infinity,
                duration: 1,
                delay: 0.7
            }
        },
        8:{
            width: "80%",
            transition:{
                yoyo: Infinity,
                duration: 1,
                delay: 0.8
            }
        },
        9:{
            width: "80%",
            transition:{
                yoyo: Infinity,
                duration: 1,
                delay: 0.9
            }
        },
        10:{
            width: "80%",
            transition:{
                yoyo: Infinity,
                duration: 1,
                delay: 1
            }
        },
        11:{
            width: "80%",
            transition:{
                yoyo: Infinity,
                duration: 1,
                delay: 1.1
            }
        },
        12:{
            width: "80%",
            transition:{
                yoyo: Infinity,
                duration: 1,
                delay: 1.2
            }
        },
        13:{
            width: "80%",
            transition:{
                yoyo: Infinity,
                duration: 1,
                delay: 1.3
            }
        },
        14:{
            width: "80%",
            transition:{
                yoyo: Infinity,
                duration: 1,
                delay: 1.4
            }
        },
        15:{
            width: "80%",
            transition:{
                yoyo: Infinity,
                duration: 1,
                delay: 1.5
            }
        },
        16:{
            width: "80%",
            transition:{
                yoyo: Infinity,
                duration: 1,
                delay: 1.6
            }
        },
    }
    
        return(
            <div id='loader_div'>
                <motion.div variants={variant_anm} animate="1" className='loader_skl'></motion.div>
                <motion.div variants={variant_anm} animate="2" className='loader_skl'></motion.div>
                <motion.div variants={variant_anm} animate="3" className='loader_skl'></motion.div>
                <motion.div variants={variant_anm} animate="4" className='loader_skl'></motion.div>
                <motion.div variants={variant_anm} animate="5" className='loader_skl'></motion.div>
                <motion.div variants={variant_anm} animate="6" className='loader_skl'></motion.div>
                <motion.div variants={variant_anm} animate="7" className='loader_skl'></motion.div>
                <motion.div variants={variant_anm} animate="8" className='loader_skl'></motion.div>
                <motion.div variants={variant_anm} animate="9" className='loader_skl'></motion.div>
                <motion.div variants={variant_anm} animate="10" className='loader_skl'></motion.div>
                <motion.div variants={variant_anm} animate="11" className='loader_skl'></motion.div>
                <motion.div variants={variant_anm} animate="12" className='loader_skl'></motion.div>
                <motion.div variants={variant_anm} animate="13" className='loader_skl'></motion.div>
                <motion.div variants={variant_anm} animate="14" className='loader_skl'></motion.div>
                <motion.div variants={variant_anm} animate="15" className='loader_skl'></motion.div>
                <motion.div variants={variant_anm} animate="16" className='loader_skl'></motion.div>
            </div>
        )
}

export default Loader
