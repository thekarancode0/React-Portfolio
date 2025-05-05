import React from 'react'

export default function ProjectCard(props) {
  return (
    <div>
        <div className='flex justify-center items-center  bg-slate-400 p-2 rounded hover:scale-105 transition-all duration-200'>
        <img src={props.imgUrl} className='w-2/5  rounded-lg' />
        <div className='text-black'>
          <h1 className='font-bold text-2xl text-center'>{props.title}</h1>
          <p className='text-end w-4/5'>{props.desc}</p>
        </div>
      </div>
    </div>
  )
}
