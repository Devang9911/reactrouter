import React, { useEffect, useRef, useState } from 'react'

function Header() {
    const [open , setOpen] = useState(false)
    const menuRef = useRef();

    useEffect(()=>{
        const handler = (e)=>{
            if (open && menuRef.current && !menuRef.current.contains(e.target)){
                setOpen(false)
            }
        }
        document.addEventListener("mousedown",handler)
        return ()=> document.removeEventListener("mousedown",handler)
    } , [open])

    return (
        <nav className='w-full flex justify-between items-center bg-gray-800 py-6 px-6'>
            <h1 className='text-white font-medium text-2xl'>Contact Manager</h1>


            {/* hamburger button */}
            <button 
            className="md:hidden"
            onClick={()=> setOpen(!open)}>
                <div className='space-y-1'>
                    <span className='block w-6 h-1 bg-white'></span>
                    <span className='block w-6 h-1 bg-white'></span>
                    <span className='block w-6 h-1 bg-white'></span>
                </div>
            </button>

            {/* mobile menu */}
            {open && (
                <>
                    <div className='fixed inset-0 md:hidden'>
                        <ul
                        ref={menuRef}
                        className='absolute py-5 top-20 left-0 bg-gray-800 w-full flex flex-col justify-center items-center text-white text-xl gap-5 md:hidden'
                        >
                            <li
                            className='cursor-pointer hover:text-blue-400'
                            onClick={()=> setOpen(false)}>
                                Dashboard
                            </li>
                            <li
                            className='cursor-pointer hover:text-blue-400'
                            onClick={()=> setOpen(false)}>
                                Add-Contact
                            </li>
                            <li
                            className='cursor-pointer hover:text-blue-400'
                            onClick={()=> setOpen(false)}>
                                Login
                            </li>
                        </ul>
                    </div>
                </>
            )}

            {/* desktop menu */}
            <ul className="hidden md:flex gap-10">
                <li className='text-lg font-medium text-white hover:text-gray-200 cursor-pointer'>Dashboard</li>
                <li className='text-lg font-medium text-white hover:text-gray-200 cursor-pointer'>Add-Contact</li>
                <li className='text-lg font-medium text-white hover:text-gray-200 cursor-pointer'>Login</li>
            </ul>

        </nav>
    )
}

export default Header