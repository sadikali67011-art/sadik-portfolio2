import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope 
} from "react-icons/fa";


function Footer(){

  return(

    <footer className="
    bg-gray-900 
    text-white 
    py-8
    ">


      <div className="
      max-w-7xl 
      mx-auto 
      px-6 
      text-center
      ">



        <h2 className="
        text-3xl 
        font-bold
        ">

          Sadik Ali

        </h2>




        <p className="
        mt-3 
        text-gray-400
        ">

          Full Stack MERN Developer

        </p>




        <p className="
        mt-2
        text-gray-500
        ">

          Building modern and scalable web applications

        </p>






        {/* Social Icons */}


        <div className="
        flex 
        justify-center 
        gap-6 
        mt-5 
        text-3xl
        ">





        <a

        href="https://github.com/sadikali67011-art"

        target="_blank"

        rel="noreferrer"

        >


          <FaGithub

          className="
          hover:text-blue-500
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
          hover:text-blue-500
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
          hover:text-blue-500
          hover:scale-125
          transition
          cursor-pointer
          "

          />


        </a>




        </div>







        <p className="
        mt-6 
        text-gray-500
        ">

          © 2026 Sadik Ali. All Rights Reserved.

        </p>



      </div>


    </footer>

  )

}


export default Footer;