import React from 'react'
import Personaje from "../../assest/Personaje.png"
import Logo from"../../assest/Logo.png"
import {motion} from "framer-motion"
import { slipeUp, slideInFromSide } from '../../utility/animation'

const Hero = () => {
  return (
    <section className='mt-36'>
      <div className='grid grid-cols-1 md:grid-cols-2'>

    {/* Textos y descripcion*/}    

    <div className='p-10 sm:p-10 md:p-15 lg:p-30 xl:p-36'>
        <motion.img  
        src={Logo} alt="Logo de juego"
        variants={slipeUp(0.2)}
        initial="initial"
        animate="animate"
        />
        <motion.p
          className='py-12 text-white'
          variants={slipeUp(0.3)}
          initial="initial"
          animate="animate"
          >
            Magic Quest es un emocionante juego de aventuras es un mundo de fantasia
         </motion.p>  

        <motion.div
            className='flex justify-center gap-4'
              variants={slipeUp(1)}
              initial="initial"
              animate="animate"
             > 
            <a className='bg-purple-600 py-2 px-12 rounded-3xl text-white hover:bg-purple-700 transition-all duration-300 items-center cursor-pointer'>
           Jugar ahora 
           <i className="bi bi-controller"></i>
           </a>
            <a className='text-white flex items-center cursor-pointer'>
            Ver Gameplay 
            <i className="bi bi-collection-play"></i>
            </a>
          </motion.div>
          </div>
       

    {/* Imagen */}
    <motion.div
     className='p-10 sm:p-10 md:p-15 lg:p-30 xl:p-36'
      variants={slideInFromSide("right" , 0.5)}
      initial="initial"
      animate="animate"
     >
      <img src={Personaje} alt="Personaje del Juego"/>
      </motion.div>
      </div>    
   </section>
  )
   }

export default Hero