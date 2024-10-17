import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <motion.div
      initial={{ x: -200 }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
      className="about"
    >
      <h2>About Bolt Racers</h2>
      <p>We are a team of dedicated students from MMMUT, Gorakhpur, competing in SAE SUPRA, pushing the boundaries of automotive design and innovation.
      The journey of the **Bolt Racers SAE SUPRA Team** from Madan Mohan Malaviya University of Technology (MMMUT), Gorakhpur, has been a remarkable story of passion, innovation, and teamwork. Established with the goal of competing in the prestigious SAE SUPRA competition, the team has worked tirelessly to design, engineer, and build a formula-style race car from the ground up. This ambitious project is a blend of technical expertise and dedication, involving students from various engineering disciplines, including mechanical, electrical, and automotive engineering. 

From the initial stages of conceptualizing the design to conducting rigorous research on aerodynamics, powertrains, and chassis materials, the Bolt Racers faced numerous challenges. The team constantly balanced academics with the demands of hands-on engineering work, long hours in the workshop, and troubleshooting mechanical issues. Their learning curve was steep, but through perseverance, they built a car that met the high standards required for participation in the SAE SUPRA event.

Participation in SAE SUPRA has provided invaluable experience to the Bolt Racers. It not only tested their technical knowledge but also honed their project management, teamwork, and problem-solving skills under real-world conditions. The competition itself is intense, featuring static and dynamic events that push teams to showcase their vehicle's performance, endurance, and efficiency on the race track. Over the years, the team has evolved, taking lessons from each competition to improve their designs and processes, striving for excellence with every iteration of their vehicle.

Through this journey, the Bolt Racers have embodied the spirit of innovation and perseverance, representing MMMUT on a national platform. Their hard work has been a testament to the university's commitment to fostering a culture of practical learning and excellence in engineering.
      </p>
    </motion.div>
  );
};

export default About;
