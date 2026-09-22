import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaMobileAlt } from "react-icons/fa";


function Services() {


const services = [

{
icon:<FaCode/>,
title:"Web Development",
description:
"I create modern, responsive and user-friendly websites using React.js, Tailwind CSS and modern technologies."
},


{
icon:<FaLaptopCode/>,
title:"MERN Stack Development",
description:
"I build full-stack web applications using MongoDB, Express.js, React.js and Node.js."
},


{
icon:<FaMobileAlt/>,
title:"Responsive Design",
description:
"I design mobile-friendly websites that work smoothly on desktop, tablet and smartphone devices."
}


];



return (


<section

id="services"

className="
py-20
bg-gray-50
"


>


<div className="
max-w-7xl
mx-auto
px-6
">





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

My Services

</h2>



<p className="
mt-4
text-gray-600
">

Services I provide as a Full Stack MERN Developer

</p>


</motion.div>







{/* Cards */}



<div className="
grid
md:grid-cols-3
gap-8
mt-12
">



{


services.map((service,index)=>(


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

y:-10,

scale:1.05

}}



className="
bg-white
p-8
rounded-2xl
shadow-lg
text-center
hover:shadow-2xl
transition
"



>


<div className="
text-5xl
text-blue-600
flex
justify-center
mb-5
">


{service.icon}


</div>




<h3 className="
text-2xl
font-bold
text-gray-900
">


{service.title}


</h3>





<p className="
mt-4
text-gray-600
leading-7
">


{service.description}


</p>





</motion.div>



))


}



</div>





</div>


</section>


)


}


export default Services;