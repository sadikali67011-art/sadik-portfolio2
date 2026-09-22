import { motion } from "framer-motion";


function Loader(){

return(

<div className="
fixed
inset-0
flex
items-center
justify-center
bg-black
z-50
">


<motion.h1

initial={{
opacity:0,
scale:0
}}

animate={{
opacity:1,
scale:1
}}

transition={{
duration:1
}}

className="
text-5xl
font-bold
text-blue-500
"

>

Sadik Portfolio

</motion.h1>


</div>


)

}


export default Loader;