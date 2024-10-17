import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="home"
    >
      <header className="hero">
        <h2>Welcome to Bolt Racers SAE SUPRA</h2>
        <p>Leading the way in automotive engineering at MMMUT</p>
        <motion.button whileHover={{ scale: 1.1 }} className="cta-button">Explore Our Journey</motion.button>
      </header>
    </motion.div>
  );
};

export default Home;
