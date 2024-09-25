import Tilt from "react-parallax-tilt";

const ProjectCards = ({ img }) => {
  return (
    <Tilt
      className="card_con my-2 parallax-effect"
      glareEnable={true}
      glareMaxOpacity={1}
      glareColor="#ffffff"
      glarePosition="bottom"
      glareBorderRadius="20px"
    >
      <div>
        <img src={img} alt="" />
      </div>
    </Tilt>
  );
};

export default ProjectCards;
