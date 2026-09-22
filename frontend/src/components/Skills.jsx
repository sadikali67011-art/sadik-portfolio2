import { motion } from "framer-motion";


function Skills() {


  const skills = [
    {
      name: "HTML",
      level: "95%"
    },

    {
      name: "CSS / Tailwind CSS",
      level: "90%"
    },

    {
      name: "JavaScript",
      level: "85%"
    },

    {
      name: "React.js",
      level: "85%"
    },

    {
      name: "Node.js",
      level: "80%"
    },

    {
      name: "MongoDB",
      level: "75%"
    }

  ];


  return (

    <section
      id="skills"
      className="py-20 bg-gray-50"
    >


      <div className="max-w-7xl mx-auto px-6">


        {/* Heading */}

        <motion.h2

          initial={{y:50, opacity:0}}

          whileInView={{y:0, opacity:1}}

          transition={{duration:0.8}}

          className="text-4xl font-bold text-center"

        >

          My Skills

        </motion.h2>



        <p className="text-center text-gray-600 mt-4">

          Technologies I use to build modern web applications

        </p>



        {/* Skills */}

        <div className="grid md:grid-cols-2 gap-8 mt-12">


          {
            skills.map((skill,index)=>(


              <motion.div

                key={index}

                initial={{x:-50, opacity:0}}

                whileInView={{x:0, opacity:1}}

                transition={{
                  duration:0.5,
                  delay:index * 0.1
                }}

              >


                <div className="flex justify-between mb-2">

                  <h3 className="font-semibold text-lg">
                    {skill.name}
                  </h3>


                  <span>
                    {skill.level}
                  </span>


                </div>



                {/* Progress Bar */}

                <div className="w-full bg-gray-300 rounded-full h-3">


                  <div

                    className="bg-blue-600 h-3 rounded-full"

                    style={{
                      width: skill.level
                    }}

                  >

                  </div>


                </div>


              </motion.div>


            ))
          }



        </div>



      </div>


    </section>


  )

}


export default Skills;