import { useEffect, useRef, useState } from "react";
import ProjectCards from "../../components/ProjectCards/ProjectCards";
import ProjectVideo from "../../components/ProjectVideo/ProjectVideo";
import ThreeModelCards from "../../components/ThreeDModel/ThreeModelCards";
const ProjectGallery = () => {
  const [currentView, setCurrentView] = useState("motion");
  const projectRef = useRef(null);
  // Separate arrays for different media types
  const artImages = [
    "/project/1.png",
    "/project/4.png",
    "/project/02.png",
    "/project/02.png",
    "/project/7.png",
    "/project/august.png",
    "/project/Democracy.png",
    "/project/night club.png",
    "/project/yuo.png",
    "/project/w.png",
    "/project/iop.png",
    "/project/we (28).png",
    "/project/new_nigeria_landscape.png",
    "/project/we (2).png",
    "/project/we (3).png",
    "/project/we (4).png",
    "/project/we (5).png",
    "/project/we (6).png",
    "/project/we (7).png",
    "/project/we (8).png",
    "/project/we (9).png",
    "/project/we (10).png",
    "/project/we (11).png",
    "/project/we (12).png",
    "/project/we (13).png",
    "/project/we (14).png",
    "/project/we (15).png",
    "/project/we (16).png",
    "/project/we (17).png",
  ];

  const motionGraphics = [
    "video/kop.mp4",
    "/video/air.mp4",
    "/video/emmanuel.mp4",
    "video/robot.mp4",
  ];

  const threeDModels = [
    "/project/3d1.png",
    "/project/3d2.png",
    "/project/3d3.png",
  ];
  useEffect(() => {
    if (projectRef.current) {
      projectRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [currentView]);
  // Function to render the appropriate grid content
  const renderGridContent = (contentArray, Component) => {
    return (
      <div className="grid grid-cols-3 justify-between w-full gap-4">
        {contentArray.map((img, index) => (
          <Component key={index} img={img} />
        ))}
      </div>
    );
  };

  return (
    <div className="sectionfour-con">
      <h4 className="section_header_text">Project</h4>
      <div className="flex gap-6 lg:flex-nowrap flex-wrap my-4">
        {/* Refactored buttons with dynamic active class */}
        {["motion", "art", "3d"].map((view) => (
          <button
            key={view}
            className={`${
              currentView === view ? "bg-[#7a50c0]" : "bg-[#573a80]"
            } text-white py-2 px-3 rounded-md  disabled:bg-gray-200`}
            onClick={() => setCurrentView(view)}
            disabled={view === "3d"}
          >
            {view === "motion" && "Motion Graphics"}
            {view === "art" && "Art & Illustration"}
            {view === "3d" && "3D Models"}
          </button>
        ))}
      </div>

      {/* Conditional Rendering based on current view */}
      {currentView === "art" && renderGridContent(artImages, ProjectCards)}
      {currentView === "motion" &&
        renderGridContent(motionGraphics, ProjectVideo)}
      {currentView === "3d" && renderGridContent(threeDModels, ThreeModelCards)}
    </div>
  );
};

export default ProjectGallery;
