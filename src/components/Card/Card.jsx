import "./Card.css";
import Tilt from "react-parallax-tilt";

const Card = ({ img, text, headText }) => {
  return (
    <Tilt
      className="card_con my-2 parallax-effect"
      glareEnable={true}
      glareMaxOpacity={0.8}
      glareColor="#ffffff"
      glarePosition="bottom"
      glareBorderRadius="20px"
    >
      <div className="d-flex align-items-center inner-element">
        <div className="card_img inner-element">
          <div>
          <div className="card_con">
            <img src={img} alt="star" />
          </div>
          </div>
          
        </div>
        <div className="card_text">
          <h4 className="poppins-semibold">{headText} </h4>
          <p className="poppins-medium">{text}</p>
        </div>
      </div>
    </Tilt>
  );
};

export default Card;
