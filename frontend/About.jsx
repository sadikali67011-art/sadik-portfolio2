import { motion } from "framer-motion";

function About() {

  return (

    <section 
      id="about"
      className="py-20 bg-white"
    >

      <div className="max-w-7xl mx-auto px-6">


        {/* Heading */}

        <motion.h2
          initial={{y:50, opacity:0}}
          whileInView={{y:0, opacity:1}}
          transition={{duration:0.8}}
          className="text-4xl font-bold text-center"
        >
          About Me
        </motion.h2>



        {/* Content */}

        <div className="grid md:grid-cols-2 gap-10 mt-12 items-center">


          {/* Left */}

          <motion.div
            initial={{x:-100, opacity:0}}
            whileInView={{x:0, opacity:1}}
            transition={{duration:1}}
          >

            <h3 className="text-3xl font-semibold mb-5">
              Full Stack MERN Developer
            </h3>


            <p className="text-gray-600 leading-8">

              I am Sadik Ali, a passionate Full Stack Web Developer.
              I build responsive and scalable web applications using
              modern technologies like React.js, Node.js, Express.js
              and MongoDB.

            </p>


            <p className="text-gray-600 leading-8 mt-4">

              My goal is to create clean UI, efficient backend systems
              and real-world projects that solve problems.

            </p>


          </motion.div>



          {/* Right Skills Card */}

          <motion.div

            initial={{x:100, opacity:0}}
            whileInView={{x:0, opacity:1}}
            transition={{duration:1}}

            className="grid grid-cols-2 gap-5"

          >


            <div className="p-6 shadow-lg rounded-xl hover:scale-105 duration-300">

              <h3 className="text-2xl font-bold text-blue-600">
                10+
              </h3>

              <p>
                Projects Completed
              </p>

            </div>



            <div className="p-6 shadow-lg rounded-xl hover:scale-105 duration-300">

              <h3 className="text-2xl font-bold text-blue-600">
                1+
              </h3>

              <p>
                Years Learning
              </p>

            </div>



            <div className="p-6 shadow-lg rounded-xl hover:scale-105 duration-300">

              <h3 className="text-2xl font-bold text-blue-600">
                15+
              </h3>

              <p>
                Technologies
              </p>

            </div>



            <div className="p-6 shadow-lg rounded-xl hover:scale-105 duration-300">

              <h3 className="text-2xl font-bold text-blue-600">
                100%
              </h3>

              <p>
                Dedication
              </p>

            </div>


          </motion.div>


        </div>


      </div>


    </section>

  )

}


export default About;