import { useEffect, useRef, useState } from "react";
import ProjectCards from "../../components/ProjectCards/ProjectCards";
import ProjectVideo from "../../components/ProjectVideo/ProjectVideo";
import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const ProjectGallery = () => {
  const [currentView, setCurrentView] = useState("motion");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const projectRef = useRef(null);

  const artImages = [
    "/project/img01.webp",
    "/project/img04.webp",
    "/project/img03.webp",
    "/project/img45.webp",
    "/project/img46.webp",
    "/project/img51.webp",
    "/project/img1.webp",
    "/project/img8.jpg",
    "/project/img2.webp",
    "/project/img3.png",
    "/project/img5.webp",
    "/project/img6.webp",
    "/project/img60.webp",
    "/project/img61.webp",
    "/project/img62.webp",
    "/project/img63.webp",
    "/project/img56.webp",
    "/project/img7.png",
    "/project/img10.webp",
    "/project/img11.webp",
    "/project/img12.webp",
    "/project/img13.webp",
    "/project/img14.webp",
    "/project/img15.webp",
    "/project/img16.webp",
    "/project/img18.webp",
    "/project/img19.webp",
    "/project/img20.webp",
    "/project/img21.webp",
    "/project/img22.webp",
    "/project/img23.webp",
    "/project/img33.webp",
    "/project/img34.webp",
    "/project/img35.webp",



  ];

  const motionGraphics = [
    {
      youtube: false,
      vid: '/video/Control.mp4'
    },
    {
      youtube: false,
      vid: "/video/gobaltenstone.mp4",
    },

    {
      youtube: false,
      vid: "/video/vid3.mp4",
    },
    {
      youtube: false,
      vid: "/video/vid49.mp4",
    },
    {
      youtube: false,
      vid: "/video/vid50.mp4",
    },
    {
      youtube: false,
      vid: "/video/vid45.mp4",
    },
    {
      youtube: false,
      vid: "/video/vid20.mp4",
    },
    {
      youtube: false,
      vid: "/video/vid21.mp4",
    },
    {
      youtube: false,
      vid: "/video/vid4.mp4",
    },
    {
      youtube: false,
      vid: "/video/vid5.mp4",
    },


    {
      youtube: false,
      vid: "/video/vid8.mp4",
    },


    {
      youtube: false,
      vid: "/video/id11.mp4",
    },
    {
      youtube: false,
      vid: "/video/vid12.mp4",
    },
    {
      youtube: false,
      vid: "/video/Navigation.mp4",
    },
    {
      youtube: false,
      vid: "/video/Chatting Characters_01.mp4",
    },


  ];
  const threeDModels = ['3dproject/3d1.webp', '3dproject/3d3.webp','3dproject/3d20.webp', '3dproject/3d21.webp','3dproject/3d22.webp','3dproject/3d23.webp',    '3dproject/3d5.webp', '3dproject/3d6.webp', '3dproject/3d7.webp',];

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
    <div className="sectionfour-con z-[1000]">
      <h4 className="section_header_text">Project</h4>
      <div className="flex items-center justify-between ">
        <div className="flex gap-6 lg:flex-nowrap flex-wrap my-4">
          {["motion", "art", "3d"].map((view) => (
            <button
              key={view}
              className={`${currentView === view ? "bg-[#7a50c0]" : "bg-[#573a80]"
                } text-white py-2 px-3 rounded-md`}
              onClick={() => setCurrentView(view)}
            >
              {view === "motion" && "Motion Graphics"}
              {view === "art" && "Art & Illustrations"}
              {view === "3d" && "3D Models"}
            </button>
          ))}
        </div>
        <div>
          <a
            href="https://drive.google.com/drive/folders/1Tmnm42NUoscS8BvFu0-h2busxYoMiqAI?usp=sharing"
            className="p-2 rounded-full hover:text-black text-sm font-bold bg-white flex items-center gap-1 "
          >
            View More
            <img src="/images/arrow-right.svg" className="w-4" alt="" />
          </a>
        </div>
      </div>


      {currentView === "art" && renderGridContent(artImages, ProjectCards)}
      {currentView === "motion" &&
        renderGridContent(motionGraphics, ProjectVideo, true)}
      {currentView === "3d" && renderGridContent(threeDModels, ProjectCards)}

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


    </div>
  );
};

export default ProjectGallery;
