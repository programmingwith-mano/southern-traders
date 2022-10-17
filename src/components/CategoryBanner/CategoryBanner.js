import React from "react";
import Banner1 from "../../assets/images/spices1.jpg";
import Banner2 from "../../assets/images/packing.jpg";
import Banner3 from "../../assets/images/millet.jpg";
import Banner4 from "../../assets/images/herbals.jpg";
import Banner5 from "../../assets/images/dry_fruits_nuts.jpg";
import Banner6 from "../../assets/images/others.jpg";
import { Link } from "react-router-dom";
import go from "../../modules/Navigation";

function CategoryBanner(props) {
  return (
    <div className="banner">
      <div className="container" style={{marginBottom: '30px', marginTop: '30px'}}>
        <div className="row">
        <div className="col-md-4">
            <div
              className="banner_item align-items-center"
              style={{
                backgroundImage: `url(${Banner5})`
              }}
              data-aos="fade-up" data-aos-offset="100"
              
            >
              <div className="banner_category">
                <Link to="/southern-traders/productlist/DRYFURITS">DRYFURITS</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="banner_item align-items-center"
              style={{
                backgroundImage: `url(${Banner1})`
              }}
              data-aos="fade-down-right" data-aos-offset="100"
            >
              <div className="banner_category">
                <Link to="/southern-traders/productlist/SPICES">SPICES</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="banner_item align-items-center"
              style={{
                backgroundImage: `url(${Banner2})`
              }}
              data-aos="fade-up" data-aos-offset="100"
            >
              <div className="banner_category">
              <Link to="/southern-traders/productlist/PACKING">GROCERIES</Link>
              </div>
            </div>
          </div>
          </div>
          <div className="row justify-content-md-center">
          <div className="col-md-4">
            <div
              className="banner_item align-items-center"
              style={{
                backgroundImage: `url(${Banner3})`
              }}
              data-aos="fade-left" data-aos-offset="100"
            >
              <div className="banner_category">
                <Link to="/southern-traders/productlist/MILLETS">MILLETS</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="banner_item align-items-center"
              style={{
                backgroundImage: `url(${Banner4})`
              }}
              data-aos="fade-right" data-aos-offset="100"
            >
              <div className="banner_category">
                <Link to="/southern-traders/productlist/HERBALS">HERBALS</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryBanner;
