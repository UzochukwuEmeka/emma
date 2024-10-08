import MiniCard from "../../components/MiniCard/MiniCard";
const Sectionthree = () => {
  const tools = [
    {
      img: "/images/ab2.png",
      text: "Adobe After Effects",
    },
    {
      img: "/images/bl.png",
      text: "Blender",
    },
    {
      img: "/images/an.png",
      text: "Adobe Animate",
    },
    {
      img: "/images/ps.png",
      text: "Adobe Photoshop",
    },
    {
      img: "/images/ai.png",
      text: "Adobe Illustrator",
    },
  ];

  return (
    <div className="section-three-con my-5">
      <h4 className="section_header_text py-5">Tools-Set</h4>
      <div className="row justify-content-between">
        {tools.map((tool, index) => (
          <div className="col-lg-2" key={index}>
            <MiniCard img={tool.img} text={tool.text} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sectionthree;
