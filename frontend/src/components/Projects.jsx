import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

import motor from "../assets/motor.png";
import job from "../assets/job.png";
import laundry from "../assets/laundry.png";


function Projects() {


const projects = [

{
title:"Motor Doctor",
image:motor,

description:
"A modern automobile e-commerce platform where users can browse vehicle parts, search products, add items to cart and place secure orders.",

tech:[
"React",
"Tailwind CSS",
"Node.js",
"Express.js",
"MongoDB"
],

github:"https://github.com/sadikali67011-art",

demo:"https://motor-doctor.vercel.app",

category:"MERN Stack",

},



{
title:"HuntJob",

image:job,

description:
"A full-stack job portal where job seekers can search jobs and recruiters can post vacancies and manage applications.",

tech:[
"React",
"Node.js",
"Express.js",
"MongoDB"
],

github:"https://github.com/sadikali67011-art",

demo:"",

category:"Full Stack",

},




{
title:"Laundry Service",

image:laundry,

description:
"A responsive laundry booking website where customers can book services, schedule pickups and receive email confirmation.",

tech:[
"React",
"JavaScript",
"Tailwind CSS",
"EmailJS"
],


github:"https://github.com/sadikali67011-art",

demo:"",

category:"Frontend",

}



];





return (


<section
id="projects"
className="py-20 bg-gray-50"
>



<div className="max-w-7xl mx-auto px-6">





{/* Heading */}


<motion.div


initial={{
opacity:0,
y:40
}}


whileInView={{
opacity:1,
y:0
}}


transition={{
duration:0.8
}}


viewport={{
once:true
}}


className="text-center"


>


<h2 className="
text-4xl
font-bold
text-gray-900
">

My Projects

</h2>



<p className="
mt-4
text-gray-600
">

Some of my featured Full Stack Web Development Projects

</p>


</motion.div>







{/* Cards */}



<div className="
grid
md:grid-cols-2
lg:grid-cols-3
gap-8
mt-14
">





{

projects.map((project,index)=>(



<motion.div


key={index}



initial={{
opacity:0,
y:60
}}



whileInView={{
opacity:1,
y:0
}}



transition={{

duration:0.6,

delay:index*0.2

}}



viewport={{
once:true
}}



whileHover={{

y:-12,

scale:1.03

}}



className="
bg-white
rounded-2xl
overflow-hidden
shadow-lg
hover:shadow-2xl
transition
"



>

<Tilt 
  glareEnable={true} 
  glareMaxOpacity={0.5} 
  glareColor="#ffffff" 
  glarePosition="bottom" 
  tiltMaxAngleX={10} 
  tiltMaxAngleY={10} 
  transitionSpeed={1500}
>



{/* Image */}



<div className="
relative
overflow-hidden
">


<img

src={project.image}

alt={project.title}

loading="lazy"

className="
w-full
h-56
object-cover
hover:scale-110
transition
duration-500
"

/>




<span

className="
absolute
top-4
left-4
bg-blue-600
text-white
px-4
py-1
rounded-full
text-sm
"

>

{project.category}

</span>


</div>









{/* Content */}



<div className="p-6">





<h3

className="
text-2xl
font-bold
text-gray-900
"

>

{project.title}

</h3>






<p

className="
text-gray-600
mt-4
leading-7
"

>

{project.description}

</p>







{/* Technology */}



<div className="
flex
flex-wrap
gap-2
mt-5
">


{


project.tech.map((item,i)=>(


<span

key={i}

className="
bg-blue-100
text-blue-700
px-3
py-1
rounded-full
text-sm
font-medium
"


>

{item}


</span>



))


}



</div>







{/* Buttons */}



<div className="
flex
gap-4
mt-6
">





<a


href={project.github}

target="_blank"

rel="noreferrer"


className="
flex-1
flex
items-center
justify-center
gap-2
bg-gray-900
text-white
py-3
rounded-lg
hover:bg-black
transition
"


>


<FaGithub/>

GitHub


</a>







{

project.demo &&

<a


href={project.demo}

target="_blank"

rel="noreferrer"


className="
flex-1
flex
items-center
justify-center
gap-2
bg-blue-600
text-white
py-3
rounded-lg
hover:bg-blue-700
transition
"


>


<FaExternalLinkAlt/>

Demo


</a>


}





</div>




</div>
</Tilt>





</motion.div>



))


}




</div>







{/* Github Profile Button */}



<div className="
text-center
mt-14
">



<a

href="https://github.com/sadikali67011-art"

target="_blank"

rel="noreferrer"


className="
inline-flex
items-center
gap-3
bg-blue-600
text-white
px-8
py-3
rounded-lg
hover:bg-blue-700
transition
"

>


<FaGithub/>

View All Projects


</a>



</div>






</div>


</section>


)


}


export default Projects;