import "../../Styling/CustomBanner.scss";

function CustomBanner() {
  return (
    <div className="banner">
      <h2 className="banner__header">
        Contact us directly for details!{" "}
        <span className="banner__header--attention">
          Orders may take longer based on request.
        </span>
      </h2>
      <button className="normal"> Contact Us</button>
    </div>
  );
}

export default CustomBanner;
