import React from "react";
import "./sectionone.css";
const Sectionone = () => {
  return (
    <div className="section-one-con ">
      <div className="row justify-content-center align-items-center py-5">
        <div className="col-12" style={{ position: "relative" }}>
          <div className="purpule_con">
            <div className="img-con-one">
              <img src="/images/emma.png" alt="image" />
            </div>
          </div>
          <div className="arrow_img_con">
            <img src="/images/arrow.svg" alt="" />
          </div>
        </div>
        <div className="col-12 ">
          <div className="name_text  d-flex align-items-center gap-4">
            <h5 className="preahvihear-regular"> Hello! I Am </h5>
            <h4 className=" preahvihear-regular">God’s Will Uzo</h4>
          </div>
        </div>
      </div>
      {/* <div class="bblob"></div> */}
      <div className="my_info ">
        <h4 className=" preahvihear-regular my-3">
          Currently, I'm an Graphic Motion Designer and Illustrator
          <br />
          <a href="">THE CASA UX</a> ,
        </h4>
        <p className=" preahvihear-regular my-3">
          Creates visual concepts and designs using traditional and digital
          tools. They specialize in creating illustrations, often for editorial,
          advertising, or educational purposes. Illustrators bring ideas to life
          through drawings, paintings, or digital art, enhancing communication
          and storytelling within the company's projects.
        </p>
      </div>
    </div>
  );
};

export default Sectionone;
