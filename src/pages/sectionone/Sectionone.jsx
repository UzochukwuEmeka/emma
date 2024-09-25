import "./sectionone.css";
const Sectionone = () => {
  return (
    <div className="section-one-con  my-9">
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
            <h4 className=" preahvihear-regular">Emmanuel</h4>
          </div>
        </div>
      </div>
      <div className="bblob"></div>
      <div className="my_info grid sm:grid-cols-3 grid-cols-1 ">
        <div className="col-span-2">
          <h4 className=" preahvihear-regular my-3">
            I'm The Graphic Motion Designer and Illustrator You Need
            <br />
          ,
          </h4>
          <p className=" preahvihear-regular my-3">
            Creates visual concepts and designs using traditional and digital
            tools. I am specialize in creating illustrations, often for
            editorial, advertising, or educational purposes. I bring
            ideas to life through drawings, paintings, or digital art, enhancing
            communication and storytelling within the company's projects.
          </p>
        </div>
        <div className="relative">
          <div className="p-img">
            <img src="/images/robo.gif" alt="" className="w-full  " />
          </div>
          <div className="w-16 h-16 rounded-full bg-[#11071f] absolute right-0 bottom-0"></div>
        </div>
      </div>
    </div>
  );
};

export default Sectionone;
