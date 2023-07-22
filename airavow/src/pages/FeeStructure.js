import React from "react";
import Custom from "./Custom";
import FeesStructure from "../assets/FeeStructure.pdf"

const FeeStructure = () => {
  return (
    <div>
      <Custom text="Fees Structure" title1="Downloads" title="Fees Structure" />
      <div
        className="container-fluid pt-4 pb-5"
        style={{ backgroundColor: "#ffff7726" }}
      >
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 col-12">
            <h4 className="fifth-text-color pb-4">
              <u>Fee</u> Structure
            </h4>
            <embed src={FeesStructure} style={{ width: "100%" }} height="400" alt="fee_structure"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeeStructure;
