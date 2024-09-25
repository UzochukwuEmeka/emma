import './MiniCard.css'
import Tilt from 'react-parallax-tilt'
const MiniCard = ({ img, text }) => {
  return (
    <Tilt
      className="mini_card_con d-flex flex-column justify-content-center align-items-center gap-3 my-2 parallax-effect"
      glareEnable={true}
      glareMaxOpacity={0.8}
      glareColor="#ffffff"
      glarePosition="bottom"
      glareBorderRadius="20px"
      perspective={500}
    >
      <div className="img_con inner-element">
        <img src={img} alt="" />
      </div>
      <p className="poppins-medium">{text}</p>
    </Tilt>
  )
}

export default MiniCard
