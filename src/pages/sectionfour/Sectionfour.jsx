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
    "/project/1.png",
    "/project/4.png",
    "/project/6.png",
    "/project/f.png",
    "/project/un.png",
    "/project/02.png",
    "/project/7.png",
    "/project/pop.png",
    "/project/Democracy.png",
    "/project/night club.png",
    "/project/yuo.png",
    "/project/w.png",
    "/project/iop.png",
    "/project/igapa1.jpg",
    "/project/igapa5.jpg",
    "/project/igapa2.jpg",
    "/project/igapa3.jpg",
    "/project/igapa.jpg",
    "/project/story.jpg",
  ];

  const motionGraphics = [
    "/video/vid1.mp4",
    "/video/gobaltenstone.mp4",
    "/video/truck.mp4",
    "/video/kop.mp4",
    "/video/vid3.mp4",
    "/video/emmanuel.mp4",
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
