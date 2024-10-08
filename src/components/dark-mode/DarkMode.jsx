import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import './DarkMode.scss'

import React, { useContext } from 'react'
import ThemeContext from '../../context/ThemeContext'

//const DarkMode = () => {
//    const setDarkMode = () => {
//        document.querySelector('body').setAttribute('data-theme', 'dark')
//        localStorage.setItem('selectedTheme', 'dark')
//    }
//    const setLightMode = () => {
//        document.querySelector('body').setAttribute('data-theme', 'light')
//        localStorage.setItem('selectedTheme', 'light')
//    }
//
//    const selectedTheme = localStorage.getItem('selectedTheme')
//    if (selectedTheme === 'dark') {
//        setDarkMode()
//    }
//
//    const toggleTheme = (e) => {
//        if (e.target.checked) setDarkMode()
//        else setLightMode()
//    }
//    return (
//        <div className="dark_mode">
//            <input
//                className="dark_mode_input"
//                type="checkbox"
//                id="darkmode-toggle"
//                onChange={toggleTheme}
//                defaultChecked={selectedTheme === 'dark'}
//            />
//            <label className="dark_mode_label" htmlFor="darkmode-toggle">
//                <SunIcon className="sun svg" />
//                <MoonIcon className="moon svg" />
//            </label>
//        </div>
//    )
//}

//export default DarkMode

const DarkMode = () => {
    const { theme, toggleTheme } = useContext(ThemeContext) // Use context

    return (
        <div className="dark_mode">
            <input
                className="dark_mode_input"
                type="checkbox"
                id="darkmode-toggle"
                onChange={toggleTheme}
                checked={theme === 'dark'}
            />
            <label className="dark_mode_label" htmlFor="darkmode-toggle">
                <SunIcon className="sun svg" />
                <MoonIcon className="moon svg" />
            </label>
        </div>
    )
}

export default DarkMode
