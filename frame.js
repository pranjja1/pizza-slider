import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./frame.css";

const Frame = () => {
  const navigate = useNavigate();

  const onPizzaTransparentBackground1Image1Click = useCallback(() => {
    navigate("/frame-1");
  }, [navigate]);

  const onThRemovebgPreview4ImageClick = useCallback(() => {
    navigate("/frame-2");
  }, [navigate]);

  return (
    <div className="ellipse-parent">
      <div className="frame-child" />
      <img
        className="pizza-transparent-background-1-icon"
        alt=""
        src="/pizzatransparentbackground17removebgpreview-1@2x.png"
      />
      <img
        className="pizza-transparent-background-1-icon1"
        alt=""
        src="/pizzatransparentbackground17removebgpreview-2@2x.png"
        onClick={onPizzaTransparentBackground1Image1Click}
      />
      <img
        className="th-removebg-preview-2-icon"
        alt=""
        src="/thremovebgpreview-2@2x.png"
      />
      <img
        className="pepperoni-pizza-removebg-previ-icon"
        alt=""
        src="/pepperonipizzaremovebgpreview-2@2x.png"
      />
      <img
        className="th-removebg-preview-4-icon"
        alt=""
        src="/thremovebgpreview-4@2x.png"
        onClick={onThRemovebgPreview4ImageClick}
      />
      <img
        className="th-removebg-preview-5-icon"
        alt=""
        src="/thremovebgpreview-5@2x.png"
      />
      <img
        className="pepperoni-pizza-removebg-previ-icon1"
        alt=""
        src="/pepperonipizzaremovebgpreview-21@2x.png"
      />
      <img
        className="th-removebg-preview-5-icon1"
        alt=""
        src="/thremovebgpreview-51@2x.png"
      />
      <div className="pizza">PIZZA</div>
      <div className="capsicum">capsicum</div>
    </div>
  );
};

export default Frame;
