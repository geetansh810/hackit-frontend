import React, { useState } from 'react'

const SearchBar = (props) => {

    const [name, setName] = useState("");
    function filter(e) {
        setName(e)
        props.filter(e);
    }

    return (
        <div className="search-menu"  style={{justifyContent:"center", width:"50%", margin:"auto"}}>
            <div className="search-bar"  style={{width:"100%"}}>
                <input type="text" className="search-bar" placeholder='Search Contest' value={name} onChange={(e) => filter(e.target.value)} />
            </div>
            {/* <div className="search-location">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-map-pin"
                >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                </svg>
                Banglore, INDIA
            </div>
            <div className="search-job">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-briefcase"
                >
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                </svg>
                <input type="text" placeholder="Job Type" />
            </div>
            <div className="search-salary">
                <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth=".4"
                >
                    <path
                        d="M12.6 18H9.8a.8.8 0 010-1.5h2.8a.9.9 0 000-1.8h-1.2a2.4 2.4 0 010-4.7h2.8a.8.8 0 010 1.5h-2.8a.9.9 0 000 1.8h1.2a2.4 2.4 0 010 4.7z"
                        stroke="currentColor"
                    />
                    <path
                        d="M12 20a.8.8 0 01-.8-.8v-2a.8.8 0 011.6 0v2c0 .5-.4.8-.8.8zM12 11.5a.8.8 0 01-.8-.8v-2a.8.8 0 011.6 0v2c0 .5-.4.8-.8.8z"
                        stroke="currentColor"
                    />
                    <path
                        d="M21.3 23H2.6A2.8 2.8 0 010 20.2V3.9C0 2.1 1.2 1 2.8 1h18.4C22.9 1 24 2.2 24 3.8v16.4c0 1.6-1.2 2.8-2.8 2.8zM2.6 2.5c-.6 0-1.2.6-1.2 1.3v16.4c0 .7.6 1.3 1.3 1.3h18.4c.7 0 1.3-.6 1.3-1.3V3.9c0-.7-.6-1.3-1.3-1.3z"
                        stroke="currentColor"
                    />
                    <path
                        d="M23.3 6H.6a.8.8 0 010-1.5h22.6a.8.8 0 010 1.5z"
                        stroke="currentColor"
                    />
                </svg>
                <input type="text" placeholder="Salary Range" />
            </div>
            <button className="search-button">Find Job</button> */}
        </div>
    )
}

export default SearchBar