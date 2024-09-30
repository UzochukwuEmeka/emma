import Tilt from "react-parallax-tilt";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ProjectCards = ({ img }) => {
  return (
    <Tilt
      className="card_con my-2 parallax-effect cursor-pointer"
      glareEnable={true}
      glareMaxOpacity={1}
      glareColor="#ffffff"
      glarePosition="bottom"
      glareBorderRadius="20px"
    >
      <div>
        <LazyLoadImage alt={"image"} src={img} />
      </div>
    </Tilt>
  );
};

export default ProjectCards;
