import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./frame3.css";

const Frame3 = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/frame-2");
  }, [navigate]);

  const onThRemovebgPreview4ImageClick = useCallback(() => {
    navigate("/frame-2");
  }, [navigate]);

  return (
    <div className="ellipse-wrapper" onClick={onFrameContainerClick}>
      <div className="ellipse-div" />
      <img
        className="pizza-transparent-background-1-icon6"
        alt=""
        src="/pizzatransparentbackground17removebgpreview-13@2x.png"
      />
      <img
        className="pizza-transparent-background-1-icon7"
        alt=""
        src="/pizzatransparentbackground17removebgpreview-22@2x.png"
      />
      <img
        className="th-removebg-preview-2-icon3"
        alt=""
        src="/thremovebgpreview-22@2x.png"
      />
      <img
        className="pepperoni-pizza-removebg-previ-icon6"
        alt=""
        src="/pepperonipizzaremovebgpreview-24@2x.png"
      />
      <img
        className="th-removebg-preview-4-icon3"
        alt=""
        src="/thremovebgpreview-44@2x.png"
        onClick={onThRemovebgPreview4ImageClick}
      />
      <div className="pizza3">PIZZA</div>
      <div className="mushroom">mushroom</div>
    </div>
  );
};

export default Frame3;
