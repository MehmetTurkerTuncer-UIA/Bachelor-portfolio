import { CONTACT } from "../constants/data"
import {motion} from "framer-motion"

const Contact = () => {
  return (
    <motion.div
         whileInView={{opacity: 1, y:0 }} 
         initial={{opacity: 0, y: -100}}
         transition= {{duration: 0.5}}
    
    
    className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-3xl">Get in Touch with Innovative WebCrafters </h1>
      <motion.div
      whileInView={{opacity: 1, x:0 }} 
      initial={{opacity: 0, x: -100}}
      transition= {{duration: 1}}
      
      
      className="text-center tracking-tighter text-2xl ">
  
      <motion.p 
      whileInView={{opacity: 1, x:0 }} 
      initial={{opacity: 0, x: -100}}
      transition= {{duration: 1}}
      
      className="my-4">{CONTACT.adress}</motion.p>
      <motion.p
      whileInView={{opacity: 1, x:0 }} 
      initial={{opacity: 0, x: -100}}
      transition= {{duration: 1}}
      
      className="my-4">{CONTACT.phoneNo}</motion.p>
     <a href="#" className="border-b">{CONTACT.email}</a>
      </motion.div>
    
    </motion.div>
  )
}

export default Contact
