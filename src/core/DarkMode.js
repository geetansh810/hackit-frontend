import React, { useEffect, useState } from 'react'
import "./DarkMode.css"


const DarkMode = () => {

    const setDark = () => {
        localStorage.setItem("theme", "dark");
        document.documentElement.setAttribute("data-theme", "dark");
    };

    const setLight = () => {
        localStorage.setItem("theme", "light");
        document.documentElement.setAttribute("data-theme", "light");
    };

    const [theme, setTheme] = useState("")

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");

        storedTheme === null ? setTheme("light") : setTheme(storedTheme);

    }, [])

    useEffect(() => {

        if (theme === "light") {
            setLight();
        }
        else if (theme === "dark") {
            setDark();
        } else {
            setLight();
        }
    }, [theme])

    return (
        <div className="toggle-theme-wrapper">
            <span>☀️</span>
            <label className="toggle-theme" htmlFor="checkbox">
                <input
                    type="checkbox"
                    id="checkbox"
                    className='darkToggle'
                    onChange={(e) => e.target.checked ? setTheme("dark") : setTheme("light")}
                />
                <div className={theme === "dark" ? "slider round darkToggle" : "slider round"} ></div>
            </label>
            <span>🌒</span>
        </div>
    )
}

export default DarkMode