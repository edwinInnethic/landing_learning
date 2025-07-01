import React, { useState } from "react"
import Logo from "../../assest/Logo.png"
export const navbarlinks = [
  {
    id: 1,
    title: "Inicio",
    link: "/"
  },

  {
    id: 2,
    title: "Nosotros",
    link: "#"
  },
  {
    id: 3,
    title: "Contacto",
    link: "#"
  },
  {
    id: 4,
    title: "Soporte",
    link: "#"
  },
]

export const NavbarRedes = [
  {
    id: 1,
    title: "Instagram",
    link: "https://www.instagram.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
      </svg>
    )
  },
  {
    id: 2,
    title: "TikTok",
    link: "https://www.tiktok.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tiktok" viewBox="0 0 16 16">
        <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
      </svg>
    )
  },
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    };
    

  return (
    <nav>
        <div className="flex justify-between place-items-center sm:px-12 sm:py-6 px-4 py-6">

          {/*Logo navbar */}

            <div>
              <img src={Logo} 
              alt="Logo del sitio"
              className="w-[80px] h-[80px]"/>
            </div>

          {/* Botón de cerrar (X) */}
        <button onClick={toggleMenu} className="md:hidden text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
          {isOpen ? (<path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
       />) : (<path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
        />) }
          
       
          
        </svg>
        </button>


          {/*Navegacion desktop */}
            <div className="hidden md:block">
              <ul className="flex sm:space-x-8 space-x-4">
                {navbarlinks.map((link)=>(
                  <li key={link.id}>
                    <a 
                    className='text-white sm:text-lg text-sm hover:text-sky-200 transition-transform hover:scale-110 transform inline-block duration-300'
                    href={link.link}
                    >
                      {link.title}
                      </a>
                  </li>
                ))}
                </ul>
            </div>

         {/*Navegacion redes desktop */}
            <div className="hidden md:block">
              <ul className="flex space-x-4">
              {NavbarRedes.map((link)=>(
                  <li key={link.id}>
                    <a
                    target="_blank"
                    rel="noopener noreferrer" 
                     className='inline-block transition-transform duration-300 transform hover:scale-125'
                    href={link.icon}
                    >
                      <i
                        className={ `${link.icon} sm:text-2xl text-lg text-white hover:text-sky-200 transition-all duration-300 `}
                      ></i>
                    </a>
                  </li>
                ))}
                </ul>
           
            
            </div>
        </div>

        {/*Menu movil */} 
        <div className={`md:hidden absolute w-full bg-purple-950 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <ul className='flex flex-col px-4 py-2'>
            {navbarlinks.map((link)=>(
              <li key={link.id} className="py-2 text-center">
                <a 
                className="text-white hover:text-sky-200"
                href={link.link} 
                onClick={()=>setIsOpen(false)}>
                  {link.title}
                  </a>
              </li>
            ))}
            </ul>
                <ul className='flex space-x-4 py-2 border-t border-r-purple-700 justify-center'>
                  {NavbarRedes.map((link)=>(
                      <li key={link.id}>
                        <a
                        target="_blank"
                        rel="noopener noreferrer" 
                        className=" inline-block"
                        href={link.link} 
                        onClick={()=>setIsOpen(false)}
                        >
                         <i   className={ `${link.icon} text-lg text-white hover:text-sky-200 `}
                          ></i>
                        </a>
                      </li>
                    ))}
                    </ul>
          </div>
    </nav>

  )
}

export default Navbar