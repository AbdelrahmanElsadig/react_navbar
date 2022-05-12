import React, { useEffect, useRef, useState } from 'react'

const Navbar = () => {
    const [show, setShow] = useState(false)
    const nav: any = useRef(null);
    function clickHandler() {
        if (nav.current) {
            if (!show) {
                nav.current.style.height = nav.current.scrollHeight + 'px';
                setShow(true)
                return
            }
            nav.current.style.height = 0;
            setShow(false)
        }
    }


    return (
        <header className="w-full flex flex-col py-3 shadow-lg">
            <div onClick={() => clickHandler()} className="text md:hidden group space-y-2 mx-auto cursor-pointer">
                <div className={`w-8 h-1 rounded-lg duration-300 ease-in-out
                 bg-neutral-500 group-hover:bg-sky-500
                  ${show ? 'rotate-45 translate-y-1' : ''}
                `}></div>
                <div className={`w-8 h-1 rounded-lg duration-300 ease-in-out
                 bg-neutral-500 group-hover:bg-sky-500
                 ${show ? '-rotate-45 -translate-y-2' : ''}
                `}></div>
            </div>
            <nav ref={nav} className="block w-[95%] mx-auto h-0 duration-300 transition-all justify-center gap-4 md:max-h-full overflow-hidden md:flex md:self-center ">
                <a href="#" className="flex text-xl py-2 ease-in-out rounded-sm w-full hover:bg-sky-50 transition-all duration-300
                hover:text-sky-500 hover:pl-4 md:hover:bg-transparent md:hover:pl-0 md:w-fit">Home</a>
                <a href="#" className="flex text-xl py-2 ease-in-out rounded-sm w-full hover:bg-sky-50 transition-all duration-300
                hover:text-sky-500 hover:pl-4 md:hover:bg-transparent md:hover:pl-0 md:w-fit">About</a>
                <a href="#" className="flex text-xl py-2 ease-in-out rounded-sm w-full hover:bg-sky-50 transition-all duration-300
                hover:text-sky-500 hover:pl-4 md:hover:bg-transparent md:hover:pl-0 md:w-fit">Projects</a>
                <a href="#" className="flex text-xl py-2 ease-in-out rounded-sm w-full hover:bg-sky-50 transition-all duration-300
                hover:text-sky-500 hover:pl-4 md:hover:bg-transparent md:hover:pl-0 md:w-fit">Contact</a>
                <a href="#" className="flex text-xl py-2 ease-in-out rounded-sm w-full hover:bg-sky-50 transition-all duration-300
                hover:text-sky-500 hover:pl-4 md:hover:bg-transparent md:hover:pl-0 md:w-fit">Profile</a>

            </nav>
        </header>
    )
}

export { Navbar }
