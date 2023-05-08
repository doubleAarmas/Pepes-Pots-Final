import "../../Styling/miniHero.scss";
import fastShipping from "../../Logos/icons8-fast-delivery-64.png";
import Organic from "../../Logos/icons8-organic-64.png";
import Sown from "../../Logos/icons8-tree-planting-64.png";

function miniHero() {
  return (
    <div className="feature__section">
      <div className="feature__box">
        <img src={fastShipping} alt="Shipping Icons" />
        <h6>Fast Shipping</h6>
      </div>
      <div className="feature__box">
        <img src={Organic} alt="Organically Grown icon by Icons8" />
        <h6>Organically Grown</h6>
      </div>
      <div className="feature__box">
        <img src={Sown} alt="Tree Planting icon by Icons8" />
        <h6>Sown With Care</h6>
      </div>
    </div>
  );
}

export default miniHero;
