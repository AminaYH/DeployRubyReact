import React from 'react';
import '../styles/home.css'; // Import the CSS file

/**
 * Home component
 * Displays a welcome message and brief description
 */
const Home = () => {
    return (
        <div className="home-container">
            <div className="home-content">
                <h1 className="home-title">Welcome to Workout Logger</h1>
                <p className="home-description">Track your workouts and progress.</p>
            </div>
        </div>
    );
};

export default Home;
