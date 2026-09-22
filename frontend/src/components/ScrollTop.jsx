import { FaArrowUp } from "react-icons/fa";


function ScrollTop(){

const top=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

}


return(

<button

onClick={top}

className="
fixed
bottom-5
right-5
bg-blue-600
text-white
p-4
rounded-full
shadow-lg
hover:scale-110
transition
"

>

<FaArrowUp/>

</button>

)

}


export default ScrollTop;