import { motion } from "framer-motion";
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaWhatsapp 
} from "react-icons/fa";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";


function Contact() {


const form = useRef();

const [loading,setLoading] = useState(false);

const [message,setMessage] = useState("");





const sendEmail = async (e)=>{
e.preventDefault();
setLoading(true);

const formData = new FormData(form.current);
const data = {
  name: formData.get("user_name"),
  email: formData.get("user_email"),
  message: formData.get("message")
};

try {
  const response = await fetch("http://localhost:5000/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  const result = await response.json();

  if (response.ok) {
    setMessage("✅ Message Sent Successfully!");
    form.current.reset();
  } else {
    setMessage("❌ Failed to send message: " + (result.error || "Unknown error"));
  }
} catch (error) {
  console.error(error);
  setMessage("❌ Failed to send message!");
} finally {
  setLoading(false);
}
};







return(


<section

id="contact"

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


className="text-center"


>


<h2 className="
text-4xl
font-bold
text-gray-900
">

Contact Me

</h2>



<p className="
text-gray-600
mt-4
">

Let's build something amazing together 🚀

</p>



</motion.div>







<div className="
grid
md:grid-cols-2
gap-10
mt-12
">






{/* Left Content */}



<motion.div


initial={{
x:-100,
opacity:0
}}


whileInView={{
x:0,
opacity:1
}}


transition={{
duration:1
}}



>


<div className="
inline-flex
items-center
gap-2
bg-green-100
text-green-700
px-4
py-2
rounded-full
font-medium
">


<span className="
w-3
h-3
bg-green-500
rounded-full
">

</span>


Available For Freelance Work


</div>






<h3 className="
text-3xl
font-semibold
mt-6
">

Get In Touch

</h3>





<p className="
text-gray-600
leading-8
mt-4
">

I am available for freelance projects,
internships and full-time opportunities.

</p>








<div className="
mt-6
space-y-4
text-gray-700
">


<p>
📧 sadikali67011@gmail.com
</p>


<p>
📱 +91 7534894896
</p>


<p>
📍 Uttar Pradesh, India
</p>


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
cursor-pointer
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
cursor-pointer
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
cursor-pointer
"

/>


</a>







<a

href="https://wa.me/917534894896"

target="_blank"

rel="noreferrer"

>


<FaWhatsapp

className="
text-green-500
hover:scale-125
transition
cursor-pointer
"

/>


</a>



</div>





</motion.div>









{/* Form */}



<motion.form


ref={form}

onSubmit={sendEmail}


initial={{
x:100,
opacity:0
}}


whileInView={{
x:0,
opacity:1
}}


transition={{
duration:1
}}



className="
bg-white
p-8
rounded-2xl
shadow-xl
"


>



<input

type="text"

name="user_name"

placeholder="Your Name"

required


className="
w-full
border
p-3
rounded-lg
mb-5
outline-none
focus:border-blue-600
"

/>






<input

type="email"

name="user_email"

placeholder="Your Email"

required


className="
w-full
border
p-3
rounded-lg
mb-5
outline-none
focus:border-blue-600
"

/>







<textarea


name="message"

placeholder="Your Message"

rows="5"

required


className="
w-full
border
p-3
rounded-lg
mb-5
outline-none
focus:border-blue-600
"

>

</textarea>







<button


type="submit"


disabled={loading}


className="
w-full
bg-blue-600
text-white
py-3
rounded-lg
hover:bg-blue-700
hover:scale-105
transition
duration-300
"


>


{

loading ?

"Sending..."

:

"Send Message"

}


</button>





{

message &&

<p className="
text-center
mt-4
font-medium
text-green-600
">

{message}

</p>


}



</motion.form>







</div>



</div>


</section>


)


}


export default Contact;