import React from "react";
import "./Step.scss";

interface StepProps {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  step: string;
  title: string;
  desc: string;
  color: string;
}

const Step = ({ Icon, step, title, desc, color }: StepProps) => {
  return (
    <>
      <div className="section-how-step flex">
        <div className={`icon-container ${color}`}>{<Icon />}</div>
        <p>{step}</p>
        <p>{title}</p>
        <p>{desc}</p>
      </div>
    </>
  );
};

export default Step;
