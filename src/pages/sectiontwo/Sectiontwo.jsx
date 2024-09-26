import "./sectiontwo.css";
import Card from "../../components/Card/Card";
const Sectiontwo = () => {
  const cardContent = [
    {
      img: "/images/cup.svg",
      headText: "Creativity ",
      text: "  Ability to generate original and imaginative visual concepts that align with the brand's vision.'",
    },

    {
      img: "/images/drop.svg",
      headText: "Attention to Detail",
      text: " Skilled at capturing intricate details that enhance the clarity and appeal of visual elements.",
    },
    {
      img: "/images/star.svg",
      headText: "Versatility ",
      text: "  Can work across various mediums, from hand-drawn illustrations to digital graphics.",
    },
    {
      img: "/images/bulb.svg",

      headText: "Communication",
      text: "Transforms abstract ideas into visual forms that communicate complex concepts clearly and effectively.",
    },
    {
      img: "/images/drop.svg",
      headText: "Adaptability",
      text: " Able to adjust style and tone to match different project requirements, audiences, or brand guidelines",
    },
    {
      img: "/images/cup.svg",
      headText: "Storytelling Skills ",
      text: " Combines motion, design, and audio to create compelling narratives that engage the audience.",
    },
  ];
  return (
    <div className="sectiontwo-con my-5">
      <h4 className="preahvihear-regular section_header_text py-5">
        Some of My Attribute👍👍
      </h4>

      <div className="row">
        {cardContent.map((card, index) => (
          <div className="col-lg-6" key={index}>
            <Card img={card.img} text={card.text} headText={card.headText} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sectiontwo;
