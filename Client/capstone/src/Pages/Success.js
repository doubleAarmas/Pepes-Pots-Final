import "../Styling/Success.scss";
import Planted from "../Images/Planted.jpg";

function Success() {
  return (
    <>
      <h1 className="success"> Thank you for your purchase!</h1>
      <div className="plant__container">
        <img src={Planted} alt="small planted crop" className="plant" />
      </div>
    </>
  );
}

export default Success;
