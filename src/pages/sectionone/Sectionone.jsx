import TrukModel from "../../components/3dmodels/truck/TrukModel";
import RobotModelSection from "../../components/RobotModelSection";
import "./sectionone.css";
import { motion } from "framer-motion";
const Sectionone = () => {
  return (
    <div className="section-one-con  mb-5">
      <div className="row justify-content-center align-items-center py-2">
        <div className="name_text  d-flex align-items-center gap-4 col-lg-12 justify-center">
          <h5 className="preahvihear-regular"> Hello! I Am </h5>
          <h4 className=" preahvihear-regular">Emmanuel</h4>
        </div>
        <div className="col-12" style={{ position: "relative" }}>
          <motion.a
            href=""
            className="absolute "
            animate={{
              x: ["0%", "100%", "-100%", "0%"],
              y: ["0%", "10%", "90%", "90%", "-90%", "-80%", "-10%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div>
              <img
                src="/images/facebook.png"
                alt="facebook"
                loading="lazy"
                className="w-16 "
              />
            </div>
          </motion.a>
          <motion.a
            href=""
            className="absolute right-0 "
            animate={{
              x: ["0%", "-600%", "-90%", "8%"],
              y: [
                "0%",
                "10%",
                "50%",
                "100%",
                "120%",
                "-160%",
                "-150%",
                "-140%",
                "-10%",
                "-2%",
              ],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              src="/images/whatsapp.png"
              alt="facebook"
              loading="lazy"
              className="w-16"
            />
          </motion.a>
          <motion.a
            href=""
            className="absolute bottom-20"
            animate={{
              x: ["0%", "-100%", "-90%", "8%"],
              y: ["-0%", "10%", "90%", "90%", "-90%", "-80%", "-10%"],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              src="/images/X.png"
              alt="facebook"
              loading="lazy"
              className="w-16"
            />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/emmaillustrate1/"
            className="absolute bottom-20 right-0"
            animate={{
              x: ["0%", "-100%", "-90%", "8%"],
              y: ["-0%", "10%", "90%", "90%", "-90%", "-80%", "-10%"],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              src="/images/IG.png"
              alt="facebook"
              loading="lazy"
              className="w-16"
            />
          </motion.a>

          <div className="purpule_con">
            <div className="img-con-one">
              <img src="/images/emma.png" alt="image" />
            </div>
          </div>
        </div>
        <div className="col-12 "></div>
      </div>

      <div className="my_info grid lg:grid-cols-4 grid-cols-1  mt-20">
        <div className="col-span-3">
          <h4 className=" preahvihear-regular my-3">
            I am the Motion Graphic Designer and Illustrator you’ve been looking
            for, <br /> ready to bring your vision to life with captivating
            designs and animations.
          </h4>
          <p className=" preahvihear-regular my-3">
            I am a passionate graphic designer with 4 years of experience and a
            knack for creating visually compelling designs that communicate
            effectively and resonate with audiences. With a background in both
            digital and print media, I bring a blend of creativity and technical
            skill to every project.
          </p>
        </div>
        <div className="lg:block hidden">
          <RobotModelSection />
        </div>
      </div>
      <div className="w-full">
        <div className="grid grid-cols-3">
          <div className="lg:col-span-2  lg:block hidden">
            <TrukModel />
          </div>
          <div>
            <p className="preahvihear-regular my-3 text-white">
              I thrive in collaborative environments, working closely with
              clients and teams to transform ideas into tangible designs that
              align with brand vision and goals. From concept to execution, I am
              committed to delivering high-quality work that elevates a brand's
              presence and engages its audience. My versatility allows me to
              adapt to various design challenges, whether it's creating engaging
              social media content, eye-catching packaging, or impactful
              marketing materials.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2">
          <div></div>
          <p className="preahvihear-regular my-3 text-white">
            In every project, my aim is to push creative boundaries, staying
            up-to-date with design trends while maintaining a focus on clear
            communication and aesthetic harmony."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sectionone;
