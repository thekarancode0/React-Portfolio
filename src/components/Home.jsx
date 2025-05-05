import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
// import TextTransition, { presets } from 'react-text-transition';

const TEXTS = ['Frontend Developer', 'Data Structure & Algo', 'Java Developer', 'YouTuber'];
function Home() {

  // const [index, setIndex] = React.useState(0);

  // React.useEffect(() => {
  //   const intervalId = setInterval(
  //     () => setIndex((index) => index + 1),
  //     3000, // every 3 seconds
  //   );
  //   return () => clearTimeout(intervalId);
  // }, []);

  // const{theme} = useContext(ThemeContext)  
  return (
    <>
      <div className="mt-14 w-screen h-screen flex flex-col md:flex-row justify-center items-center">
        <div className="flex flex-row md:flex-col justify-center md:justify-between items-center ml-10 mb-2 w-60 ">
            <NavLink className=" font-bold text-2xl mx-3 hover:text-blue-600 transition-colors duration-100 ease-linear" to="https://www.linkedin.com/in/karan-kumar-8164832b3/"><i className='bx bxl-linkedin-square'></i></NavLink>
            <NavLink className=" font-bold text-2xl mx-3 hover:text-blue-600 transition-colors duration-100 ease-linear" to="https://github.com/thekarancode0"><i className='bx bxl-github' ></i></NavLink>
            <NavLink className=" font-bold text-2xl mx-3 hover:text-blue-600 transition-colors duration-100 ease-linear" to="https://www.instagram.com/main_karan_/"><i className='bx bxl-instagram-alt'></i></NavLink>
            <NavLink className=" font-bold text-2xl mx-3 hover:text-blue-600 transition-colors duration-100 ease-linear" to="https://www.youtube.com/@main_karan"><i className='bx bxl-youtube' ></i></NavLink>
        </div>
        <img src="/React-Portfolio/images/profile.jpg" 
            className="w-60  rounded-xl border-2 border-blue-600 ml-10"
        />
        <div className="ml-10">
            <h1 className="text-5xl font-extrabold"><span className="text-blue-600">Karan</span> Kumar</h1>
            <h3 className="flex  justify-center items-center font-bold text-blue-600 ">
            {/* <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition> */}
            </h3>
        </div>
      </div>
    </>
  );
}

export default Home;
