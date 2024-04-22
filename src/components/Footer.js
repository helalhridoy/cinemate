import { Link } from 'react-router-dom'
import React from 'react'

export const Footer = () => {
    return (


        <footer className="bg-white shadow  dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to="https://flowbite.com/" className="hover:underline">CineMate</Link>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <Link to="#" className="hover:underline me-4 md:me-6">Facebook</Link>
                    </li>
                    <li>
                        <Link to="#" className="hover:underline me-4 md:me-6">LinkedIn</Link>
                    </li>
                    <li>
                        <Link to="#" className="hover:underline me-4 md:me-6">GitHub</Link>
                    </li>
                    <li>
                        <Link to="#" className="hover:underline">Contact</Link>
                    </li>
                </ul>
            </div>
        </footer>

    )
}
