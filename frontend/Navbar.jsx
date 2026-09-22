import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";


function Navbar() {


const [open,setOpen] = useState(false);



const menu = [

{
name:"Home",
link:"#home"
},


{
name:"About",
link:"#about"
},


{
name:"Services",
link:"#services"
},


{
name:"Education",
link:"#education"
},


{
name:"Skills",
link:"#skills"
},


{
name:"Projects",
link:"#projects"
},


{
name:"Contact",
link:"#contact"
}

];



return (


<motion.nav

initial={{
y:-100
}}

animate={{
y:0
}}

transition={{
duration:0.7
}}

className="
fixed
top-0
left-0
w-full
bg-white
shadow-md
z-50
"

>


<div className="
max-w-7xl
mx-auto
px-6
py-4
flex
justify-between
items-center
">


{/* Logo */}


<motion.h1

whileHover={{
scale:1.1
}}

className="
text-3xl
font-bold
text-blue-600
cursor-pointer
"

>

Sadik

</motion.h1>






{/* Desktop Menu */}


<ul className="
hidden
md:flex
gap-8
text-gray-700
font-medium
">


{

menu.map((item,index)=>(


<li key={index}>


<a

href={item.link}

className="
hover:text-blue-600
transition
duration-300
"

>

{item.name}

</a>


</li>


))


}



</ul>







{/* Mobile Button */}


<button

onClick={()=>setOpen(!open)}

className="
md:hidden
text-3xl
text-blue-600
"

>


{

open ?

<FaTimes/>

:

<FaBars/>

}


</button>




</div>









{/* Mobile Menu */}



{

open && (


<motion.ul


initial={{

opacity:0,
height:0

}}



animate={{

opacity:1,
height:"auto"

}}



className="
md:hidden
bg-white
px-6
pb-5
space-y-4
shadow
"

>


{

menu.map((item,index)=>(


<li key={index}>


<a

href={item.link}

onClick={()=>setOpen(false)}

className="
block
hover:text-blue-600
transition
"

>

{item.name}


</a>


</li>


))


}



</motion.ul>


)


}



</motion.nav>


)

}


export default Navbar;