import React from 'react';
import ProjectCard from './ProjectCard';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Project() {
  return (
    <>
       <motion.div
      className="page-container"
      initial={{ opacity: 0, y: 50 }}   // Initial state
      animate={{ opacity: 1, y: 0 }}    // Final state (after animation)
      exit={{ opacity: 0, y: 50 }}      // When the page exits (optional)
      transition={{ duration: .5 }}      // Animation duration
    >
    <Link to='https://github.com/thekarancode0' className=' z-50 text-3xl absolute left-0 top-20 pl-10 hover:text-blue-500 transition-all duration-200'><i class='bx bxl-github'></i></Link>

      <div className='w-screen min-h-screen sm:px-32 pt-32 sm:pt-20 pb-10 px-10 grid justify-items-center items-center place-content-start md:grid-cols-2 grid-cols-1 gap-5'>
        <ProjectCard imgUrl="/public/images/project1.jpeg" title="Coin Toss" desc="Tossing a coin, with animation and background big text."/>
        <ProjectCard imgUrl="/public/images/project2.jpeg" title="Rock Paper Scissor" desc="Created using HTML, CSS and JavaScript, a basic rock paper scissor game."/>
        <ProjectCard imgUrl="/public/images/project3.jpeg" title="To Do List" desc="Task manager where you can add, remove task with local storage features"/>
        <ProjectCard imgUrl="/public/images/project4.jpeg" title="Key Tracker" desc="A key tracker what key is being pressed is show on screen."/>

      </div>
      </motion.div>
    </>
  );
}
