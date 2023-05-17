import "../Styling/Cancel.scss";
import Forest from "../Images/treesPost.png";

function Cancel() {
  return (
    <>
      <h1 className="cancel">
        {" "}
        Your Stripe Payment has been cancelled but we hope to see you again
        soon!
      </h1>
      <div className="plant__container">
        <img src={Forest} alt="small planted crop" className="plant" />
      </div>
    </>
  );
}

export default Cancel;
