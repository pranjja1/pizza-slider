import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./frame2.css";

const Frame2 = () => {
  const navigate = useNavigate();

  const onPepperoniPizzaRemovebgPreviImageClick = useCallback(() => {
    navigate("/frame-3");
  }, [navigate]);

  return (
    <div className="ellipse-top">
      <div className="frame-inner" />
      <img
        className="pizza-transparent-background-1-icon4"
        alt=""
        src="/pizzatransparentbackground17removebgpreview-12@2x.png"
      />
      <img
        className="pizza-transparent-background-1-icon5"
        alt=""
        src="/pizzatransparentbackground17removebgpreview-2@2x.png"
      />
      <img
        className="th-removebg-preview-2-icon2"
        alt=""
        src="/thremovebgpreview-22@2x.png"
      />
      <img
        className="pepperoni-pizza-removebg-previ-icon4"
        alt=""
        src="/pepperonipizzaremovebgpreview-24@2x.png"
        onClick={onPepperoniPizzaRemovebgPreviImageClick}
      />
      <img
        className="th-removebg-preview-4-icon2"
        alt=""
        src="/thremovebgpreview-42@2x.png"
      />
      <img
        className="th-removebg-preview-5-icon4"
        alt=""
        src="/thremovebgpreview-54@2x.png"
      />
      <img
        className="pepperoni-pizza-removebg-previ-icon5"
        alt=""
        src="/pepperonipizzaremovebgpreview-25@2x.png"
      />
      <div className="pizza2">PIZZA</div>
      <div className="tomato">tomato</div>
    </div>
  );
};

export default Frame2;
