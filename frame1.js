import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./frame1.css";

const Frame1 = () => {
  const navigate = useNavigate();

  const onThRemovebgPreview2ImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="ellipse-root">
      <div className="frame-item" />
      <img
        className="pizza-transparent-background-1-icon2"
        alt=""
        src="/pizzatransparentbackground17removebgpreview-11@2x.png"
      />
      <img
        className="pizza-transparent-background-1-icon3"
        alt=""
        src="/pizzatransparentbackground17removebgpreview-21@2x.png"
      />
      <img
        className="th-removebg-preview-2-icon1"
        alt=""
        src="/thremovebgpreview-21@2x.png"
        onClick={onThRemovebgPreview2ImageClick}
      />
      <img
        className="pepperoni-pizza-removebg-previ-icon2"
        alt=""
        src="/pepperonipizzaremovebgpreview-22@2x.png"
      />
      <img
        className="th-removebg-preview-4-icon1"
        alt=""
        src="/thremovebgpreview-41@2x.png"
      />
      <img
        className="th-removebg-preview-5-icon2"
        alt=""
        src="/thremovebgpreview-52@2x.png"
      />
      <img
        className="pepperoni-pizza-removebg-previ-icon3"
        alt=""
        src="/pepperonipizzaremovebgpreview-23@2x.png"
      />
      <img
        className="th-removebg-preview-5-icon3"
        alt=""
        src="/thremovebgpreview-53@2x.png"
      />
      <div className="pizza1">PIZZA</div>
      <div className="peparoni">peparoni</div>
    </div>
  );
};

export default Frame1;
