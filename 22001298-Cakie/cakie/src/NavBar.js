import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import Switch from '@mui/material/Switch';
import Logo from './assets/cake.png';
import './styles/NavBar.css';

function NavBar() {
    const [openLinks, setOpenLinks] = useState(false);
    const toggleNavBar = () => {
        setOpenLinks(!openLinks);
    };

    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <div className={`navBar ${theme}`}>
            <div className="leftSide">
                <img src={Logo} alt="logo" />
            </div>
            <div className="rightSide">
                <div className={`links ${openLinks ? "open" : ""}`}>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <Switch
                    checked={theme === "dark"}
                    onChange={toggleTheme}
                    inputProps={{ 'aria-label': 'theme toggle' }}
                />
                <button className="threelines" onClick={toggleNavBar}>
                    <ReorderIcon />
                </button>
            </div>
        </div>
    );
}

export default NavBar;
