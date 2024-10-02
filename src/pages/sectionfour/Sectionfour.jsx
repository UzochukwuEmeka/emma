import { useEffect, useRef, useState } from "react";
import ProjectCards from "../../components/ProjectCards/ProjectCards";
import ProjectVideo from "../../components/ProjectVideo/ProjectVideo";
import ThreeModelCards from "../../components/ThreeDModel/ThreeModelCards";
import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const ProjectGallery = () => {
  const [currentView, setCurrentView] = useState("motion");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const projectRef = useRef(null);

  const artImages = [
    "/project/img1.png",
    "/project/img2.png",
    "/project/img3.png",
    "/project/img4.png",
    "/project/img5.png",
    "/project/img6.png",
    "/project/img7.png",
    "/project/img8.jpg",
    "/project/img10.jpg",
    "/project/img11.jpg",
    "/project/img12.jpg",
    "/project/img13.jpg",
    "/project/img14.png",
    "/project/img15.png",
    "/project/img16.png",
    "/project/img17.png",
    "/project/img18.png",
    "/project/img19.jpg",
    "/project/img20.png",
    "/project/img21.png",
    "/project/img22.png",
    "/project/img23.png",

    "/project/img30.png",
    "/project/img31.png",
    "/project/img33.png",
    "/project/img34.png",
    "/project/img35.png",
    "/project/img27.png",
    "/project/img28.png",
    "/project/img29.png",
    "/project/img25.png",
    "/project/img26.png",
  ];

  const motionGraphics = [
    {
      youtube: true,
      vid: "https://www.youtube.com/embed/nHTgkejDWTE?si=r1iUrB1scA3iAudh",
    },
    {
      youtube: true,
      vid: "https://www.youtube.com/embed/P1E-vFQfjX0?si=y-xgenTvFwQYxxgq",
    },
    {
      youtube: false,
      vid: "/video/gobaltenstone.mp4",
    },
    {
      youtube: false,
      vid: "/video/kop.mp4",
    },
    {
      youtube: false,
      vid: "/video/vid3.mp4",
    },

    {
      youtube: true,
      vid: "https://www.youtube.com/embed/FYjbep436mU?si=UI3RWT2CdBRZ2wJg",
    },
    {
      youtube: true,
      vid: "https://youtu.be/qNul50QVet0?si=FDuepZ92MQV5BevB",
    },
  ];
  const threeDModels = ["/project/3d1.png", "/project/3d2.png"];

  useEffect(() => {
    if (projectRef.current) {
      projectRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [currentView]);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const renderGridContent = (contentArray, Component, isVideo = false) => {
    return (
      <div className="grid lg:grid-cols-3  sm:grid-cols-2 grid-cols-1 justify-between w-full gap-4">
        {contentArray.map((item, index) => (
          <div
            key={index}
            onClick={isVideo ? undefined : () => openLightbox(index)}
          >
            <Component img={item} />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="sectionfour-con">
      <h4 className="section_header_text">Project</h4>
      <div className="flex gap-6 lg:flex-nowrap flex-wrap my-4">
        {["motion", "art"].map((view) => (
          <button
            key={view}
            className={`${
              currentView === view ? "bg-[#7a50c0]" : "bg-[#573a80]"
            } text-white py-2 px-3 rounded-md`}
            onClick={() => setCurrentView(view)}
          >
            {view === "motion" && "Motion Graphics"}
            {view === "art" && "Art & Illustrations"}
            {view === "3d" && "3D Models"}
          </button>
        ))}
      </div>

      {currentView === "art" && renderGridContent(artImages, ProjectCards)}
      {currentView === "motion" &&
        renderGridContent(motionGraphics, ProjectVideo, true)}
      {currentView === "3d" && renderGridContent(threeDModels, ThreeModelCards)}

      <Lightbox
        open={lightboxOpen}
        close={closeLightbox}
        slides={artImages.map((img) => ({
          src: img,
          type: "image",
          title: "Art Image",
        }))}
        index={lightboxIndex} // Optionally, set the current index
      />

      <a
        href="https://drive.google.com/drive/folders/1_jpLqY2B303fClG19QNhf4KGfEx-tBAp?usp=sharing"
        className="text-white text-lg "
      >
        View More Of My Projects Here{" "}
      </a>
    </div>
  );
};

export default ProjectGallery;
