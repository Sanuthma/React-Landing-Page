import React, { useState, useEffect } from 'react';
import BannerImage from '../assets/1.1.jpg';
import '../styles/Home.css';

function Home() {
    const [name, setName] = useState('');
    const [welcomeMessage, setWelcomeMessage] = useState('');
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const hours = new Date().getHours();
        let message = 'Good Morning';

        if (hours >= 12 && hours < 18) {
            message = 'Good Afternoon';
        } else if (hours >= 18 && hours < 22) {
            message = 'Good Evening';
        } else if (hours >= 22 || hours < 5) {
            message = 'Good Night';
        }

        if (name) {
            message += `, ${name}`;
        }

        setWelcomeMessage(message);
        }, [name]);
    
    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            setCurrentTime(now.toLocaleTimeString());
        }, 1000);

        return () => clearInterval(interval);
        }, []);

    return (
        <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
            <div className="headerContainer">
                <h1>Cakie</h1>
                <p>{welcomeMessage}</p>
                <input 
                    type="text" 
                    placeholder="Enter your name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                />
                <div className="timer">
                    <p>{currentTime}</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
