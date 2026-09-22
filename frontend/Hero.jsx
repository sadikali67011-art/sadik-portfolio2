import profile from "../assets/Profile.png";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import resume from "../assets/resume.pdf";


function Hero() {

  return (

    <section
      id="home"
      className="
      relative 
      min-h-screen 
      pt-20 
      bg-gradient-to-r 
      from-slate-100 
      to-blue-100 
      flex 
      items-center
      "
    >


      <div className="
      max-w-7xl 
      mx-auto 
      px-6 
      grid 
      md:grid-cols-2 
      gap-10 
      items-center
      ">



{/* Left Content */}


<motion.div

initial={{
x:-100,
opacity:0
}}

animate={{
x:0,
opacity:1
}}

transition={{
duration:1
}}

>




{/* Freelancer Badge */}

<motion.div

initial={{
opacity:0,
y:-20
}}

animate={{
opacity:1,
y:0
}}

transition={{
delay:0.5
}}

className="
inline-flex
items-center
gap-2
bg-green-100
text-green-700
px-4
py-2
rounded-full
font-medium
"

>

<span className="
w-3
h-3
bg-green-500
rounded-full
">

</span>

Available For Freelance Work

</motion.div>





<p className="
text-xl 
text-gray-500 
mt-5
">

👋 Hello, I'm

</p>





<h1 className="
text-6xl
font-bold
mt-2
text-gray-900
">

Sadik Ali

</h1>





<h2 className="
text-3xl
font-semibold
mt-4
bg-gradient-to-r
from-blue-600
to-purple-600
bg-clip-text
text-transparent
">

Full Stack MERN Developer

</h2>





<p className="
mt-6
text-gray-600
leading-8
">

I build modern, responsive and scalable web applications
using React, Node.js, Express, MongoDB and Tailwind CSS.
I help businesses create powerful digital solutions.

</p>





{/* Buttons */}


<div className="
flex
flex-wrap
gap-4
mt-8
">



<a

href="#contact"

className="
bg-blue-600
text-white
px-6
py-3
rounded-lg
shadow-lg
hover:scale-110
transition
duration-300
"

>

Hire Me

</a>





<a

href="#projects"

className="
border
border-blue-600
text-blue-600
px-6
py-3
rounded-lg
hover:bg-blue-600
hover:text-white
transition
duration-300
"

>

View Projects

</a>





<a

href={resume}

download

className="
bg-gray-900
text-white
px-6
py-3
rounded-lg
hover:scale-110
transition
duration-300
"

>

Download CV

</a>




</div>







{/* Social Icons */}



<div className="
flex
gap-5
mt-8
text-3xl
">


<a

href="https://github.com/sadikali67011-art"

target="_blank"

rel="noreferrer"

>


<FaGithub

className="
hover:text-blue-600
hover:scale-125
transition
"

/>


</a>





<a

href="https://www.linkedin.com/in/sadik-ali-75a393294/"

target="_blank"

rel="noreferrer"

>


<FaLinkedin

className="
hover:text-blue-600
hover:scale-125
transition
"

/>


</a>





<a

href="mailto:sadikali67011@gmail.com"

>


<FaEnvelope

className="
hover:text-blue-600
hover:scale-125
transition
"

/>


</a>



</div>




</motion.div>







{/* Profile Image */}



<motion.div


initial={{

scale:0

}}


animate={{

scale:1

}}


transition={{

duration:1

}}


whileHover={{

scale:1.05

}}


className="
flex
justify-center
"


>



<motion.img


src={profile}

alt="Sadik Ali Profile"



animate={{

y:[0,-20,0]

}}



transition={{

duration:3,

repeat:Infinity

}}



className="
w-80
rounded-full
border-8
border-blue-600
shadow-2xl
"

/>



</motion.div>






</div>







{/* Scroll Down */}


<div

className="
absolute
bottom-8
left-1/2
-translate-x-1/2
animate-bounce
text-4xl
text-blue-600
"

>

↓

</div>



</section>


  );

}


export default Hero;