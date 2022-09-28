import React, { Component } from "react";
import { Link } from "react-router-dom";
import HomeCartView from "../HomeCartView";
import MobileMenu from "../MobileMenu";
import device, { size } from "../../modules/mediaQuery";
import MediaQuery from "react-responsive";
import WhatsappLogo from "../../assets/images/whatsapp.png";
import Logo from "../../assets/images/logo.jpg";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      activeclass: false,
    };
  }

  componentDidMount() {
    if (Object.keys(this.props.cart).length < 1) {
      this.props.getCartByUserId();
    }
  }

  showHideModal = () => {
    this.setState({ modalShow: !this.state.modalShow });
  };

  handleMenuClicked = () => {
    this.setState({ activeclass: !this.state.activeclass });
  };
  render() {
    const { departments, cart } = this.props;

    return (
      <div className="main_nav_container">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-left">
            {/*<div className="col">
              <img height={100} width={100} src="logo.jpg" />
            </div>*/}
              <div className="logo_container">
                <Link to="/southern-traders">
                  <table>
                    <tr>
                      <td>
                        <img height={40} width={40} src={Logo} />
                      </td>
                      <td>
                      ஸ்ரீ சதா்ன் <span>டிரேடா்ஸ்</span><br/>
                      Sri Southern <span>Traders</span>
                      </td>
                    </tr>
                  </table>
                </Link>
              </div>
              <MediaQuery query={device.max.tabletL}>
                <div style={{textAlign: 'right'}}>
                        <a href="http://wa.me/+919655366676"><img height={30} width={30} src={WhatsappLogo}></img><br/>FOR ORDERS CONTACT: <br/>+91 9655366676</a>                 
                </div>
              </MediaQuery>
              <MediaQuery query={device.max.desktop}>
              <nav className="navbar">
                <ul className="navbar_menu">
                  {/*<li>
                    <Link to="/home">home</Link>
                  </li>
                  <li className="mega-drop-down">
                    <a href="#">
                      shop <i className="fa fa-angle-down"></i>
                    </a>

                    <div className="mega-menu">
                      <div className="mega-menu-wrap">
                        {departments &&
                          departments.map((item, index) => {
                            return (
                              <div className="mega-menu-content" key={index}>
                                <h5>{item.departmentName}</h5>
                                <ul className="stander">
                                  {item.categories.split(",").map((i, idx) => {
                                    return (
                                      <li key={idx}>
                                        <a
                                          href={`/fashion-cube/shops/${item.departmentName}/${i}`}
                                        >
                                          {i}
                                        </a>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                        </li>

                  <li>
                    <a href="contact.html">contact</a>
                  </li>*/}
                  <li>
                      <a href="http://wa.me/+919655366676"><img height={50} width={50} src={WhatsappLogo}></img>FOR ORDERS CONTACT: +91 9655366676</a>
                  </li>
                </ul>
                {/*<ul className="navbar_user">
                  <li>
                    <a href="#">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-user" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="checkout">
                    <a href="#" onClick={() => this.showHideModal()}>
                      <i className="fas fa-shopping-bag"></i>
                      {cart.totalQty !== undefined && (
                        <span id="checkout_items" className="checkout_items">
                          {cart.totalQty}
                        </span>
                      )}
                    </a>
                  </li>
                      </ul>*/}
                {/*<div
                  className="hamburger_container"
                  onClick={() => this.handleMenuClicked()}
                >
                  <i className="fa fa-bars" aria-hidden="true"></i>
                    </div>*/}
              </nav>
              </MediaQuery>
            </div>
          </div>
        </div>
        {/*<MediaQuery query={device.max.tabletL}>
          <MobileMenu
            activeClass={this.state.activeclass}
            onClose={() => this.handleMenuClicked()}
                    />
        </MediaQuery>*/}
        {this.state.modalShow ? (
          <HomeCartView
            cart={cart}
            show={this.state.modalShow}
            onHide={() => this.showHideModal()}
          />
        ) : null}
      </div>
    );
  }
}

export default NavBar;
