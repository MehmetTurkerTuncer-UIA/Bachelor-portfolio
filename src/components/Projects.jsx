
import { PROJECTS } from '../constants/data'
import { motion } from "framer-motion"

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1 
      whileInView={{opacity: 1, y:0 }} 
      initial={{opacity: 0, y: -100}}
      transition= {{duration: 0.5}}


      
      
      className='my-20 text-center text-4xl'>Our Projects</motion.h1>

      <div>  
        {PROJECTS.map((project, index) => (
         <div key={index}  className = "mb-8 flex flex-wrap lg:justify-center">

         <motion.div 
          
         whileInView={{opacity: 1, x:0 }} 
         initial={{opacity: 0, x: -100}}
         transition= {{duration: 1}} 
         className='w-full lg:w-1/3 mb-6 lg:mb-0'><img src={project.image} width={350} height={500} alt= {project.title} className='mb-6 rounded'
         style={{ objectFit: 'cover' }}   />
          </motion.div>


            <motion.div 
             whileInView={{opacity: 1, x:0 }} 
             initial={{opacity: 0, x: -100}}
             transition= {{duration: 1}}
            
            
            className='w-full max-w-xl lg:w-2/3'> <h6 className='mb-3 font-semibold text-2xl' >{project.title}</h6>
            <p className='mb-4 text-neutral-400 '>{project.description} </p> 
            
            {project.technologies.map((tech, index) => (
              <span 
               key={index} 
              className = "mr-2 rounded bg-neutral-200 px-2 py-1 text-sm font-medium text-purple-900" >
              {tech}
              </span>
        
            ))}
            
            </motion.div>
           
           </div>
       ))}
   </div>
   </div>
  )
}

export default Projects
