import { Button } from "antd";
import React from "react";
import "./SectionCard.scss";
import { ReactComponent as Beginner } from "../../assets/images/book-class-section/beginner.svg";
import { ReactComponent as Advanced } from "../../assets/images/book-class-section/advanced.svg";
import { ReactComponent as Premium } from "../../assets/images/book-class-section/premium.svg";

const SectionCard = () => {
  return (
    <div className="section-card">
      <h2>Book a class</h2>
      <p className="section-card-tagline">
        Track your workouts, get better results, and be the best version of you.
        Less thinking, more lifting.
      </p>

      <div className="fitness-class-types flex">
        <div className="fitness-class flex">
          <div className="fitness-class-icon-container">
            <Beginner />
          </div>
          <div className="fitness-class-content-container">
            <p>For the beginners</p>
            <p>You never workout before, it's now a good start</p>
          </div>
        </div>
        <div className="fitness-class flex">
          <div className="fitness-class-icon-container">
            <Advanced />
          </div>
          <div className="fitness-class-content-container ">
            <p>For the beginners</p>
            <p>You never workout before, it's now a good start</p>
          </div>
        </div>
        <div className="fitness-class flex">
          <div className="fitness-class-icon-container">
            <Premium />
          </div>
          <div className="fitness-class-content-container">
            <p>For the beginners</p>
            <p>You never workout before, it's now a good start</p>
          </div>
        </div>
      </div>

      <p>
        <span>10% Discount</span> if you're already using the{" "}
        <span>Fitness Pro</span> on App Store
      </p>

      <Button type="primary">Book a class</Button>
    </div>
  );
};

export default SectionCard;
