import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <div className="container-fluid footer-image">
      <div className="row footer-container pt-5 pb-4">
        <div className="col-md-2"></div>
        <div className="col-12 col-md-4">
          <h4><span className="primary-text-color">About</span><span className="secondary-text-color">Us</span></h4>
          <p className="about" style={{ textAlign: "justify", fontWeight:'lighter' }}>
            SNS Global School has been founded to deliver academic excellence in context to the needs of 21st Century. The School's educational program will aim to prodeuce life long learners who will beco,e contributors to the society.
          </p>
          
        </div>
        <div className="col-6 col-md-2 footer p-0" style={{marginLeft:'5%'}}>
          <h4 className="p-1 primary-text-color">Quick<span className="secondary-text-color">Links</span></h4>
          <ul className="footer-list">
            <li><i className="fa fa-solid fa-chevron-right p-2"></i><a href="/campus">Campus</a></li>
            <li><i className="fa fa-solid fa-chevron-right p-2"></i><a href="/laboratories">Laboratories</a></li>
            <li><i className="fa fa-solid fa-chevron-right p-2"></i><a href="/library">Library</a></li>
            <li><i className="fa fa-solid fa-chevron-right p-2"></i><a href="/sports">Sports</a></li>
            <li><i className="fa fa-solid fa-chevron-right p-2"></i><a href="/fee-structure">Fee Structure</a></li>
          </ul>
        </div>
        <div className="col-6 col-md-2 footer p-0" style={{marginLeft:'5%'}}>
        <h4 className="p-1 primary-text-color">Essentials</h4>
          <ul className="footer-list">
            <li><i className="fa fa-solid fa-chevron-right p-2"></i><a href="/downloads">Downloads</a></li>
            {/* <li><i className="fa fa-solid fa-chevron-right p-2"></i><a href="/academics">Academic Planner</a></li> */}
            {/* <li><i className="fa fa-solid fa-chevron-right p-2"></i><a href="/">Transfer Certificate</a></li> */}
            <li><i className="fa fa-solid fa-chevron-right p-2"></i><a href="/diclouser">Disclouser</a></li>
            <li><i className="fa fa-solid fa-chevron-right p-2"></i><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="row footer-social-icons">
        <div className="col-12 text-center">
          <i className="fa-brands fa-facebook px-4"></i>
          <i className="fa-brands fa-instagram px-4"></i>
          <i className="fa-brands fa-youtube px-4"></i>
        </div>
        <div className="col-12 text-center mt-1">
          <p>DPS Technologies &#169; 2023 All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
