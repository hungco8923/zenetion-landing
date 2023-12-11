import "./sass/styles.scss";
import Hero from "./resources/img/hero 2.avif";

function App() {
  return (
    <div className="container">
      <div className="hero-section">
        <div className="hero-section__overlay" />
        <img src={Hero} alt="" />
        <div className="hero-section__content">
          <h1>Zeneton</h1>
        </div>
      </div>
      <div className="branding">
        <div className="branding__img"></div>
        <div className="branding__content"></div>
      </div>
      <div className="product">
        <h1>Product</h1>
      </div>
    </div>
  );
}

export default App;
