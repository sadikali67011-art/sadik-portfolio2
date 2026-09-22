import { motion } from "framer-motion";


function Education(){


const education=[

{
degree:"Bachelor of Computer Applications (BCA)",
college:"Teerthanker Mahaveer University, Moradabad",
year:"2023 - 2026",
description:
"Focused on Web Development, Data Structures, Database Management, Programming and Software Development."
},


{
degree:"Higher Secondary (12th)",
college:"Uttar Pradesh Board",
year:"2022",
description:
"Completed higher secondary education with Computer Science and Mathematics background."
},


{
degree:"Secondary (10th)",
college:"Uttar Pradesh Board",
year:"2020",
description:
"Completed secondary education with strong foundation in Mathematics and Science."
}


];




return(


<section

id="education"

className="
py-20
bg-white
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

Education

</h2>


<p className="
mt-4
text-gray-600
">

My academic journey and qualifications

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

education.map((item,index)=>(


<motion.div


key={index}


initial={{
opacity:0,
y:50
}}


whileInView={{
opacity:1,
y:0
}}


transition={{
duration:0.5,
delay:index*0.2
}}


viewport={{
once:true
}}



whileHover={{
y:-10
}}



className="
bg-gray-50
p-6
rounded-2xl
shadow-lg
border
"


>



<h3 className="
text-xl
font-bold
text-blue-600
">

{item.degree}

</h3>



<h4 className="
mt-3
font-semibold
text-gray-800
">

{item.college}

</h4>



<p className="
mt-2
text-gray-600
">

{item.year}

</p>



<p className="
mt-4
text-gray-600
leading-7
">

{item.description}

</p>



</motion.div>



))


}



</div>



</div>


</section>


)


}


export default Education;