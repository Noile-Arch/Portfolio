import React from 'react'

const ProjectCard = () => {
  return (
    <main className=''>
        <div className="flex flex-col justify-start items-start md:w-[300px] md:h-[450px] w-[320px] h-[400px] bg-[#646cff]  backdrop-blur-2xl rounded-[20px] shadow-md shadow-[#979b97]">
            <img
              src="project.png"
              alt=""
              className="object-cover rounded-[40px] h-[60%] w-full p-4"
            />
            <p className="px-6 py-2 w-full text-[16px] h-[20%] text-ellipsis line-clamp-3">
              A netflix clone using the latest netflix api with all the latest
              features and outstanding UI.
            </p>
            <div className="h-20% px-2">
            <button className="px-5 mx-4 py-2 mt-4 border-2 border-[#d2d2d5] rounded-[40px]">
              View project
            </button>
            </div>
           
          </div>
    </main>
  )
}

export default ProjectCard