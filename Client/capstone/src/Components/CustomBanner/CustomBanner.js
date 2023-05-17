import "../../Styling/CustomBanner.scss";
import { Button } from "react-bootstrap";

function CustomBanner() {
  return (
    <div className="banner">
      <h2 className="banner__header">
        Contact us directly for details!{" "}
        <span className="banner__header--attention">
          Orders may take longer based on request.
        </span>
      </h2>
      <Button href="/Contact" className="nav_buttons">
        Contact Us
      </Button>{" "}
    </div>
  );
}

export default CustomBanner;
