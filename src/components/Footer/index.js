/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import React from "react";
import WhatsappLogo from "../../assets/images/whatsapp.png";

function Footer(props) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="footer_nav_container d-flex flex-sm-row flex-column align-items-center justify-content-lg-start justify-content-center text-center">
              <ul className="footer_nav">
                {/*<li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>*/}
                <li>
                  <div style={{textAlign: 'left'}}>
                    <u>Contact us</u>
                  <br/><b>SRI SOUTHERN TRADERS</b>
                  <br/>175-EAST MASI STREET
                  <br/>MADURAI - 625001.
                  </div>               
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="footer_social d-flex flex-row align-items-center justify-content-lg-end justify-content-center">
              <ul>
                  <li>
                      <a href="http://wa.me/+919655366676"><img height={50} width={50} src={WhatsappLogo}></img>For orders contact: +91 9655366676</a>
                  </li>
              </ul>
            </div>
          </div>
        </div>
        {/*<div className="row">
          <div className="col-lg-12">
            <div className="footer_nav_container">
              <div className="cr">
                ©2018 All Rights Reserverd. This template is made with{" "}
                <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
                <a href="https://quintuslabs.com/" target="_blank">
                  Quintus Labs
                </a>
              </div>
            </div>
          </div>
        </div>*/}
      </div>
    </footer>
  );
}

export default Footer;
