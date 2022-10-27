

import React, { Component } from "react";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Routes from "./routes";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    AOS.init({
      easing: 'ease',
      once: true
    });
  }
  render() {
    return (
      <div>
        <Routes />
      </div>
    );
  }
}

export default App;
