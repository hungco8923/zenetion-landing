import "./sass/styles.scss";
import Hero from "./resources/video/Hero-video.mp4";
import Boxer from "./resources/img/Boxer.webp";
import Fade from "react-reveal/Fade";
import Brand from "./resources/img/821px-CK_Calvin_Klein_logo.svg.png";

function App() {
  return (
    <div className="container">
      <div className="hero-section">
        <div className="hero-section__overlay" />
        <video src={Hero} autoPlay muted loop />
        <div className="hero-section__content">
          <Fade bottom>
            <h1>Zeneton</h1>
          </Fade>
        </div>
      </div>
      <div className="branding">
        <div className="branding__content ">
          <Fade bottom>
            <h2>About Calvin Klein, Inc.</h2>
            <p>
              Calvin Klein is one of the world’s leading global fashion
              lifestyle brands with a history of bold, non-conformist ideals
              that inform everything we do. Founded in New York in 1968, the
              brand’s minimalist and sensual aesthetic drives our approach to
              product design and communication, creating a canvas that offers
              the possibility of limitless self-expression. The Calvin Klein
              brands – CK Calvin Klein, Calvin Klein, Calvin Klein Jeans, Calvin
              Klein Underwear, and Calvin Klein Performance – are connected by
              the intention and purpose of elevating everyday essentials to
              globally iconic status. Each of the brands has a distinct identity
              and position in the retail landscape, providing us the opportunity
              to market a range of universally appealing products to domestic
              and international consumers with a variety of needs. Our products
              are underpinned by responsible design, high-quality construction,
              and the elimination of all unnecessary details. We strive for
              unique and dimensional pieces that continuously wear well and
              remain relevant season after season. Global retail sales of Calvin
              Klein products were approximately $8.5 billion in 2021. Calvin
              Klein continues to solidify its position as an innovator of
              emerging digital platforms and modern marketing campaigns. PVH
              acquired Calvin Klein in 2003 and continues to oversee a focused
              approach to growing the brand’s worldwide relevance, presence, and
              long term growth.
            </p>
          </Fade>
        </div>
        <div className="branding__img">
          <Fade bottom>
            <img src={Brand} alt="" />
          </Fade>
        </div>
      </div>
      <div className="product">
        <div className="product__img">
          <Fade bottom>
            <img src={Boxer} alt="" />
          </Fade>
        </div>

        <div className="product__content">
          <Fade bottom>
            <h2>Men's Boxer Briefs</h2>
            <p>
              Calvin Klein is known for designing the best men’s boxer briefs,
              offering superior quality, comfort and style. Showcase both your
              rough and sensual side with boxer briefs, perfect for everyday
              lounging and athletics. Our elastic, stretchable and soft fabric
              creates the most comfortable yet sexy boxer briefs for men with
              support and minimal bunching and rising. Whether you’re looking
              for white boxer briefs or black boxer briefs, we offer numerous
              fits to match your lifestyle. As a happy medium between briefs and
              boxers, boxer briefs offer additional skin coverage without
              sacrificing support. Calvin Klein boxer briefs’ elongated cut
              paired with our finest luxury fabric prevents chaffing and makes
              for the best boxer briefs for active lifestyles. Boxer briefs also
              work just as well when it comes to wearing skinny men's pants or
              jeans. Calvin Klein designer boxer briefs come in a variety of
              collections designed for varying lifestyles and preferences.
              Performance boxer briefs focus on lightweight, breathable fabric
              that dries quick for maximum active comfort. Our body modal
              underwear are low rise and best paired with low rise pants. Stock
              your everyday necessities and shop Calvin Klein's collection of
              men's boxer brief packs.
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default App;
